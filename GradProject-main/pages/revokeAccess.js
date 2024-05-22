import { useState } from "react";
import styles from "@/styles/RevokeAccess.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function RevokeAccess() {
  const [doctorAddress, setDoctorAddress] = useState("");
  const [insuranceAddress, setInsuranceAddress] = useState("");
  const [selectedButton, setSelectedButton] = useState("doctor");

  const handleRevokeAccess = (event) => {
    event.preventDefault();
    // Call smart contract function to revoke access for the entered addresses
    // Reset form fields after the access has been revoked
    setDoctorAddress("");
    setInsuranceAddress("");
  };

  return (
    <>
      <Header />
      <div className={styles.containerb}>
        <h1 className={styles.title}>Revoke Access</h1>
        <h3 className={styles.black}>
          Revoke access for Dr or Insurance company from veiwing your medical
          record
        </h3>
        <div className={styles.buttons}>
          <button
            className={`${styles.buttondoc} ${
              selectedButton === "doctor" ? styles.active : ""
            }`}
            onClick={() => setSelectedButton("doctor")}
          >
            Doctor
          </button>
          <button
            className={`${styles.buttondoc} ${
              selectedButton === "insurance" ? styles.active : ""
            }`}
            onClick={() => setSelectedButton("insurance")}
          >
            Insurance Company
          </button>
        </div>
        <form onSubmit={handleRevokeAccess}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="address">
              {selectedButton === "doctor"
                ? "Doctor's Ethereum Address"
                : "Insurance Company's Ethereum Address"}
            </label>
            <input
              className={styles.formGroup}
              type="text"
              id="address"
              value={
                selectedButton === "doctor" ? doctorAddress : insuranceAddress
              }
              onChange={(event) =>
                selectedButton === "doctor"
                  ? setDoctorAddress(event.target.value)
                  : setInsuranceAddress(event.target.value)
              }
              required
            />
          </div>
          <button className={styles.button} type="submit">
            Revoke Access
          </button>
        </form>
      </div>
      <Footer />;
    </>
  );
}
