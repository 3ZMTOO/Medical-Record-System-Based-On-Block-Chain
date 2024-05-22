import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/patientProfile.module.css";

import { Inter } from "@next/font/google";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function registerPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Save changes to server
  };
  return (
    <>
      <Head>
        <title>MedicalRoom</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.containerprofile}>
        <h1 className={styles.title}>Patient Profile</h1>
        <form className={styles.formcontainer} onSubmit={handleSubmit}>
          <label className={styles.profilelabel} htmlFor="photoInput">
            Import Photo
          </label>
          <input
            id="photoInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          <div className={styles.formGroup}>
            <label className={styles.profilelabel} htmlFor="nameInput">
              Name:
            </label>
            <input
              className={styles.inputprofile}
              id="nameInput"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.profilelabel} htmlFor="ageInput">
              Age:
            </label>
            <input
              id="ageInput"
              type="number"
              value={age}
              onChange={(event) => setAge(parseInt(event.target.value, 10))}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.profilelabel} htmlFor="genderInput">
              Gender:
            </label>
            <select
              className={styles.formselect}
              id="genderInput"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.profilelabel} htmlFor="addressInput">
              Address:
            </label>
            <textarea
              id="addressInput"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <button className={styles.profileButton} type="submit">
            Save Changes
          </button>
        </form>
      </div>
      <Footer />;
    </>
  );
}