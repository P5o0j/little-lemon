import React from 'react';
import "./styles/Booking.css";
import Form from './Form';
import { useReducer } from "react";
import { fetchAPI } from '../bookingsAPI';


export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);


  return (
    <>
      <div className="res-content-wrapper">
        <div className="res-content-container">
          <div className="text">
            <h2>Heading2</h2>
            <p>Consequat quis deserunt culpa eiusmod enim incididunt laborum irure eiusmod nostrud</p>
            <p>Pariatur consequat voluptate velit aute dolor anim reprehenderit qui sint.</p>
          </div>
          <div className="form">
            <h1>Book a Table</h1>
            <p>Enim sunt laborum officia laboris laboris pariatur.</p>
            <Form availableTimes={availableTimes} updateTimes={dispatch} />
          </div>
        </div>
      </div>
    </>
  );
}
