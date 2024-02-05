import React from "react";
import './about-section.css'
import { Link } from "react-router-dom";

function AboutSection() {

    return (
        <div className="about-wrapper">
            <div className="main-blurb">
                <h3>our diamond story</h3>
                <p>The Pink Panther's heritage stretches back to 1956, when our family-run business first began making beautiful fine jewellery in Dublin. As a Dublin-based, Irish brand, we fully embrace our roots in craftsmanship, but always have our focus on the future, and in 2006, we launched our online store, offering beautiful fine jewellery direct to our customers.</p>
                <Link className="explore-link" to="shop">EXPLORE DIAMONDS</Link>
            </div>
            <div className="values-wrapper">
                <div className="single-value">
                    <h3>innovation</h3>
                    <p>Forward thinking and always innovating to create the diamonds of the future.</p>
                </div>
                <div className="single-value">
                    <h3>craftmanship</h3>
                    <p>Harnessing over 60 years of Irish heritage and expertise with every design.</p>
                </div>
                <div className="single-value">
                    <h3>conscious</h3>
                    <p>Actively working towards creating jewellery with a positive impact on the world.</p>
                </div>
                <div className="single-value">
                    <h3>attainable</h3>
                    <p>Committed to offering everyone beauty, quality and choice for all of life’s moments.</p>
                </div>
            </div>
            <div className="quote-wrapper">
                <p><i>‘At The Diamond Store, our heritage reflects a unique blend of sustainability efforts, exceptional craftsmanship, and innovative design. Celebrated with numerous accolades, we continually set the bar high, crafting jewellery that symbolises our dedication and rich legacy.’</i></p>
                <p><b>— John Doe, CEO & Co-Founder</b></p>
            </div>
        </div>
    );

}

export default AboutSection;