
import React from 'react';
import "../components/styles/TestimonialsCard.css"


export default function TestimonialsCard(props) {
    return (
        <article className="testimonials-card">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}