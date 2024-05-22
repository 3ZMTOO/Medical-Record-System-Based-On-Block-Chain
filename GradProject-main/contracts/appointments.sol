// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Appointments {
    address public owner;
    struct Appointment {
        address patientAddress;
        uint date;
        uint time;
        string status;
        string prescription;
        string diagnosis;
        string notes;
        bool paid;
    }

    Appointment[] public appointments;

    event AppointmentCreated(
        address indexed patientAddress,
        uint indexed date,
        uint indexed time
    );

    event AppointmentCancelled(
        uint indexed index,
        address indexed patientAddress,
        uint indexed date,
        uint time
    );

    constructor() {
        owner = msg.sender;
    }

    ////////////////////
    // Main Functions //
    ////////////////////

    function createAppointment(
        address _patientAddress,
        uint _date,
        uint _time,
        string memory _status,
        string memory _prescription,
        string memory _diagnosis,
        string memory _notes
    ) public payable {
        require(
            _date > block.timestamp,
            "Appointment date must be in the future"
        );
        require(msg.value >= 0.01 ether, "Payment must be at least 0.01 ether");
        Appointment memory newAppointment = Appointment({
            patientAddress: _patientAddress,
            date: _date,
            time: _time,
            status: _status,
            prescription: _prescription,
            diagnosis: _diagnosis,
            notes: _notes,
            paid: true
        });
        appointments.push(newAppointment);
        emit AppointmentCreated(_patientAddress, _date, _time);
    }

    function markAsPaid(uint _index) public payable {
        Appointment storage appointment = appointments[_index];
        require(!appointment.paid, "Appointment has already been paid");
        require(msg.value >= 0.01 ether, "Payment must be at least 0.01 ether");
        appointment.paid = true;
    }

    function cancelAppointment(uint _index) public {
        require(
            msg.sender == owner ||
                msg.sender == appointments[_index].patientAddress,
            "Only the owner or the patient can cancel the appointment"
        );
        Appointment memory appointmentToCancel = appointments[_index];
        require(
            appointmentToCancel.date > block.timestamp,
            "Cannot cancel appointment that has already occurred"
        );
        delete appointments[_index];
        emit AppointmentCancelled(
            _index,
            appointmentToCancel.patientAddress,
            appointmentToCancel.date,
            appointmentToCancel.time
        );
    }

    function getAppointmentsForPatient(
        address _patientAddress
    ) public view returns (Appointment[] memory) {
        uint count = 0;
        for (uint i = 0; i < appointments.length; i++) {
            if (appointments[i].patientAddress == _patientAddress) {
                count++;
            }
        }
        Appointment[] memory result = new Appointment[](count);
        uint index = 0;
        for (uint i = 0; i < appointments.length; i++) {
            if (appointments[i].patientAddress == _patientAddress) {
                result[index] = appointments[i];
                index++;
            }
        }
        return result;
    }
}
