import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Header.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenDoc, setIsDropdownOpenDoc] = useState(false);
  const [isDropdownOpenPatient, setIsDropdownOpenPatient] = useState(false);
  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  function toggleDropdownDoc() {
    setIsDropdownOpenDoc(!isDropdownOpenDoc);
  }
  function toggleDropdownPatient() {
    setIsDropdownOpenPatient(!isDropdownOpenPatient);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/records">Records List</Link>
          </li>
          <li className={styles.navItem}>
            <button
              className={styles.dropdownToggle}
              onClick={toggleDropdownDoc}
            >
              Doctor
            </button>
            {isDropdownOpenDoc && (
              <ul className={styles.dropdownList}>
                <li className={styles.dropdownItem}>
                  <Link href="/viewDoctorProfile">View Profile</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/makeAppointment">Make Appointment</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/updateAppointment">Update Appointment</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <button
              className={styles.dropdownToggle}
              onClick={toggleDropdownPatient}
            >
              Patient
            </button>
            {isDropdownOpenPatient && (
              <ul className={styles.dropdownList}>
                <li className={styles.dropdownItem}>
                  <Link href="/viewPatientProfile">View Profile</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/allowAccess">Allow Access</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/revokeAccess">Revoke Access</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
              Register
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdownList}>
                <li className={styles.dropdownItem}>
                  <Link href="/registerDoctor">Doctor</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/registerPatient">Patient</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
