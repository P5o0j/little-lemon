import React from 'react';
import '../components/styles/Testimonials.css';
import TestimonialsCard from './TestimonialsCard';

export default function Testimonials() {
    return (
        <div className="testimonials-section-container">
            <div className="testimonials-section-title">
                <h1>Testimonials</h1>
                <div className="testimonials-cards">
                    <TestimonialsCard name="Name" description="Dolor id consectetur sint nostrud ipsum ullamco consectetur duis mollit adipisicing qui." />
                    <TestimonialsCard name="Name" description="Fugiat ea sit exercitation nostrud officia dolore ea culpa nulla cillum sint occaecat occaecat." />
                    <TestimonialsCard name="Name" description="Consectetur eiusmod culpa et officia enim sint ex ullamco incididunt aute et.." />
                    <TestimonialsCard name="Name" description="Enim dolor quis irure ea exercitation deserunt qui fugiat reprehenderit incididunt nulla consequat nostrud." />
                    <TestimonialsCard name="Name" description="Culpa ullamco consectetur quis commodo quis in minim." />
                    <TestimonialsCard name="Name" description="Eu laboris do deserunt duis amet labore cupidatat excepteur consectetur consectetur veniam." />
                    <TestimonialsCard name="Name" description="Pariatur aute laborum laborum Lorem magna ullamco magna ex est eu aliqua duis tempor." />
                    <TestimonialsCard name="Name" description="Incididunt ea sit Lorem tempor proident reprehenderit et." />
                </div>
            </div>
            <TestimonialsCard />
        </div>
    );
}