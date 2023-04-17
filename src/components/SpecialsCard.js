import { NavLink } from 'react-router-dom';
import React from 'react';
import "../components/styles/SpecialsCard.css"
import Dessert1 from "../components/assets/greekSalad.jpg"
import Dessert2 from "../components/assets/bruschetta.jpeg"
import Dessert3 from "../components/assets/greekSalad.jpg"
import { MdDeliveryDining } from "react-icons/md"


export default function SpecialCard(props) {
    const specialMenus = [
        {
            image: Dessert1,
            title: "Greek Salad",
            price: "$12.99",
            description: "Consequat enim m quis sint occaecat excepteur proident.",
            order: "Order a delivery"
        },
        {
            image: Dessert2,
            title: "Bruschetta",
            price: "$5.99",
            description: "Non ex consequat icia excepteur laborum commodo aliquip.",
            order: "Order a delivery"
        },
        {
            image: Dessert3,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "Esse consequat adipisicing dolor irure est aliquip aliqua.",
            order: "Order a delivery"
        }
    ]

    const specialMenusItems = specialMenus.map(menu => {
        const image = menu.image;
        const title = menu.title;
        const price = menu.price;
        const description = menu.description;
        const order = menu.order;

        return (
            <div>
                <div className="special-card-container">
                    <div className="image-container">
                        <img src={image} alt="Special dessert" />
                    </div>
                    <div className="special-card-text">
                        <div className="special-card-title">
                            <h3>{title}</h3>
                            <h3 className="price-tag">{price}</h3>
                        </div>
                        <p>{description}</p>
                        <NavLink to="#">
                            <h4>
                                {order}
                                {<MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px", }} />}
                            </h4>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div>
            <div className="special-card">
                {specialMenusItems}
            </div>
        </div>
    )
}