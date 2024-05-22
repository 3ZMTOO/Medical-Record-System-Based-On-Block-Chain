import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import recordstyles from "@/styles/PatientRegistration.module.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function registerPatient() {
  const [address, setAddress] = useState(null);
  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        // Request account access from the user
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Metamask not found");
    }
  }

  return (
    <>
      <Head>
        <title>MedicalRoom</title>

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          <a
            href="#"
            onClick={() => {
              if (window.ethereum) {
                window.ethereum.request({ method: "eth_requestAccounts" });
              }
            }}
            className={styles.card}
          >
            {address ? (
              <p>Connected to {address}</p>
            ) : (
              <h2 className={styles.meta}>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.metalogo}
                    src="https://i.im.ge/2023/02/21/7XVFgh.OIP-1-removebg-preview.png"
                    alt="Metamask Logo"
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <button
                  className={styles.metamaskbutton}
                  onClick={connectToMetamask}
                >
                  Connect to Metamask
                </button>{" "}
              </h2>
            )}
          </a>
        </div>
      </main>
      <div className={recordstyles.container}>
        <h1 className={recordstyles.title}>Patient Registration</h1>
        <div className={recordstyles.formContainer}>
          <form>
            <h2 className={recordstyles.h2titles}>General Information</h2>
            <div className={recordstyles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={recordstyles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className={recordstyles.formGroup}>
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" />
            </div>
            <div className={recordstyles.formGroup}>
              <label htmlFor="height">Height</label>
              <input type="text" id="height" name="height" />
            </div>
            <div className={recordstyles.formGroup}>
              <label htmlFor="weight">Weight</label>
              <input type="text" id="weight" name="weight" />
            </div>
            <div className={recordstyles.formGroup}>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
            </div>
            <h2 className={recordstyles.h2titles}>Medical History</h2>
            <div className={recordstyles.formGroup}>
              <label htmlFor="bloodGroup">Blood Group</label>
              <input type="text" id="bloodGroup" name="bloodGroup" />
            </div>
            <div className={recordstyles.formGroup}>
              <label htmlFor="allergies">Allergies</label>
              <input type="text" id="allergies" name="allergies" />
            </div>
            <div className={recordstyles.formGroup}>
              <label htmlFor="medications">Current Medications</label>
              <input type="text" id="medications" name="medications" />
            </div>
            <div className={recordstyles.formGroup}>
              <label htmlFor="otherMedicalHistory">Other Medical History</label>
              <textarea
                id="otherMedicalHistory"
                name="otherMedicalHistory"
              ></textarea>
            </div>
            <h2 className={recordstyles.h2titles}>Emergency Contacts</h2>
            <div className={recordstyles.formGroup}>
              <label htmlFor="emergencyContact1Name">Name</label>
              <input
                type="text"
                id="emergencyContact1Name"
                name="emergencyContact1Name"
              />
            </div>
            <div className={recordstyles.formGroup}>
              <label htmlFor="emergencyContact1Phone">Phone Number</label>
              <input
                type="tel"
                id="emergencyContact1Phone"
                name="emergencyContact1Phone"
              />
            </div>

            <button className={recordstyles.button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />;
    </>
  );
}
