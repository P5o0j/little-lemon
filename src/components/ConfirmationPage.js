import React from "react";
import HeroImage from "../components/assets/confirmation.jpg";
import '../components/styles/Confirmation.css'

export default function ConfirmationPage() {
  return (
    <header className="confirmation-header">
        <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation has been sent to your email.</h4>
      </section>
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Greek food"
      ></img>
    </header>
  );
}