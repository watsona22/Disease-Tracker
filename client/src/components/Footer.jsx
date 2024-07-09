import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="inner-container">
                <Link to="/about-us">
                    <h5>About</h5>
                </Link>

                <Link to="/contact-us">
                    <h5>Contact</h5>
                </Link>
            </div>

            <h5>Designed by Amber Watson</h5>

        </div>
    )
}

export default Footer;