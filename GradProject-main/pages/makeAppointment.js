import Appstyles from "@/styles/makeAppointment.module.css";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MakeAppointment() {
  const [patientAddress, setPatientAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [prescription, setPrescription] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send appointment information to backend for creation
  };

  return (
    <>
      <Head>
        <title>Make Appointment</title>
        <meta name="description" content="Make Appointment Page" />
      </Head>
      <Header />
      <div className={Appstyles.containerb}>
        <div className={Appstyles.MakeAppointment}>
          <h1 className={Appstyles.title}>Make Appointment</h1>
          <form onSubmit={handleSubmit}>
            <div className={Appstyles.formgroup}>
              <label htmlFor="patientAddress" className={Appstyles.formlabel}>
                Patient Ethereum Address
              </label>
              <input
                type="text"
                id="patientAddress"
                value={patientAddress}
                onChange={(event) => setPatientAddress(event.target.value)}
                className={Appstyles.forminput}
                placeholder="0x1234..."
                required
              />
            </div>
            <div className={Appstyles.container}>
              <label htmlFor="date" className={Appstyles.formlabel}>
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className={Appstyles.forminput}
                required
              />
            </div>
            <div className={Appstyles.container}>
              <label htmlFor="time" className={Appstyles.formlabel}>
                Time
              </label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className={Appstyles.forminput}
                required
              />
            </div>
            <div className={Appstyles.container}>
              <label htmlFor="status" className={Appstyles.formlabel}>
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className={Appstyles.formselect}
                required
              >
                <option value="">Select a status</option>
                <option value="Pending">Pending</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
            <div className={Appstyles.container}>
              <label htmlFor="prescription" className={Appstyles.formlabel}>
                Prescription
              </label>
              <textarea
                className={Appstyles.formtextarea}
                id="prescription"
                rows="3"
                placeholder="Enter prescription information"
                value={prescription}
                onChange={(e) => setPrescription(e.target.value)}
              ></textarea>
            </div>

            <div className={Appstyles.container}>
              <label htmlFor="diagnosis" className={Appstyles.formlabel}>
                Diagnosis
              </label>
              <textarea
                className={Appstyles.formtextarea}
                id="diagnosis"
                rows="3"
                placeholder="Enter diagnosis information"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
              ></textarea>
            </div>

            <div className={Appstyles.container}>
              <label htmlFor="notes" className={Appstyles.formlabel}>
                Additional Notes
              </label>
              <textarea
                className={Appstyles.formtextarea}
                id="notes"
                rows="3"
                placeholder="Enter additional notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <div className={Appstyles.container}>
              <button
                className={Appstyles.formbutton}
                type="button"
                onClick={handleSubmit}
              >
                Create Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />;
    </>
  );
}
