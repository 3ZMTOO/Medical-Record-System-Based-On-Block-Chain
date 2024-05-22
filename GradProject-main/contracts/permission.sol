// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecords {
    struct Patient {
        bool authorized;
        mapping(address => bool) doctors;
        address[] authorizedDoctors;
        bool insuranceAuthorized;
        address[] insuranceCompanies;
    }

    mapping(address => Patient) patients;

    event AccessGranted(address indexed patient, address indexed doctor);

    event AccessRevoked(address indexed patient, address indexed doctor);

    event InsuranceAccessGranted(
        address indexed patient,
        address indexed insuranceCompany
    );

    event InsuranceAccessRevoked(
        address indexed patient,
        address indexed insuranceCompany
    );

    modifier onlyAuthorizedDoctor(address patient) {
        require(
            patients[patient].doctors[msg.sender],
            "Only authorized doctors can view a patient's medical record"
        );
        _;
    }

    function grantAccess(address doctor) public {
        require(
            !patients[msg.sender].doctors[doctor],
            "Doctor is already authorized"
        );
        patients[msg.sender].doctors[doctor] = true;
        patients[msg.sender].authorizedDoctors.push(doctor);
        patients[msg.sender].authorized = true;
        emit AccessGranted(msg.sender, doctor);
    }

    // Function for patients to revoke access from a doctor
    function revokeAccess(address doctor) public {
        require(
            patients[msg.sender].doctors[doctor],
            "Doctor is not authorized"
        );
        patients[msg.sender].doctors[doctor] = false;
        for (
            uint i = 0;
            i < patients[msg.sender].authorizedDoctors.length;
            i++
        ) {
            if (patients[msg.sender].authorizedDoctors[i] == doctor) {
                patients[msg.sender].authorizedDoctors[i] = patients[msg.sender]
                    .authorizedDoctors[
                        patients[msg.sender].authorizedDoctors.length - 1
                    ];
                patients[msg.sender].authorizedDoctors.pop();
                break;
            }
        }
        if (
            patients[msg.sender].authorizedDoctors.length == 0 &&
            !patients[msg.sender].insuranceAuthorized
        ) {
            patients[msg.sender].authorized = false;
        }
        emit AccessRevoked(msg.sender, doctor);
    }

    // Function for doctors to view a patient's medical record
    function viewMedicalRecord(
        address patient
    ) public view onlyAuthorizedDoctor(patient) returns (bool) {
        return patients[patient].authorized;
    }

    // Function for doctors to add to a patient's medical record
    function addToMedicalRecord(
        address patient,
        string memory data
    ) public onlyAuthorizedDoctor(patient) {
        // Add data to patient's medical record
    }

    // Function for patients to grant access to an insurance company
    function grantInsuranceAccess(address insuranceCompany) public {
        require(
            !patients[msg.sender].insuranceAuthorized,
            "Insurance company is already authorized"
        );
        patients[msg.sender].insuranceAuthorized = true;
        patients[msg.sender].insuranceCompanies.push(insuranceCompany);
        emit InsuranceAccessGranted(msg.sender, insuranceCompany);
    }

    // Function for patients to revoke access from a doctor
    function revokeDoctorAccess(address doctor) public {
        require(
            patients[msg.sender].doctorAuthorized,
            "Doctor is not authorized"
        );
        patients[msg.sender].doctorAuthorized = false;
        for (uint i = 0; i < patients[msg.sender].doctors.length; i++) {
            if (patients[msg.sender].doctors[i] == doctor) {
                patients[msg.sender].doctors[i] = patients[msg.sender].doctors[
                    patients[msg.sender].doctors.length - 1
                ];
                patients[msg.sender].doctors.pop();
                emit DoctorAccessRevoked(msg.sender, doctor);
                break;
            }
        }
    }

    // Function for patients to revoke access from an insurance company
    function revokeInsuranceAccess(address insuranceCompany) public {
        require(
            patients[msg.sender].insuranceAuthorized,
            "Insurance company is not authorized"
        );
        for (
            uint i = 0;
            i < patients[msg.sender].insuranceCompanies.length;
            i++
        ) {
            if (
                patients[msg.sender].insuranceCompanies[i] == insuranceCompany
            ) {
                patients[msg.sender].insuranceCompanies[i] = patients[
                    msg.sender
                ].insuranceCompanies[
                        patients[msg.sender].insuranceCompanies.length - 1
                    ];
                patients[msg.sender].insuranceCompanies.pop();
                emit InsuranceAccessRevoked(msg.sender, insuranceCompany);
                break;
            }
        }
    }
}
