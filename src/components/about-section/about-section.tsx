import { Link } from "react-router-dom";
import './about-section.scss';

function AboutSection() {

    return (
        <div>
            <div className="pinkpanther-about-us-blurb">
                <h3>Our diamon story</h3>
                <p>The Pink Panther is a fictional fine-jewellery brand created as a showcase project to demonstrate the author’s front-end development skills. Inspired by timeless elegance and playful luxury, the brand serves as a creative canvas for experimenting with modern web technologies, polished UI design, and responsive e-commerce experiences.</p>
                <Link className="pinkpanther-cta-link" to="/shop/engagement">Explore diamonds →</Link>
            </div>
            <div className="pinkpanther-our-values">
                <div className="pinkpanther-value">
                    <h3>React based</h3>
                    <p>Built with React 18.3.1, this website showcases a modular structure with reusable, scalable components.</p>
                </div>
                <div className="pinkpanther-value">
                    <h3>Responsive</h3>
                    <p>Designed to adapt seamlessly, the layout performs beautifully across phones, tablets, and desktops.</p>
                </div>
                <div className="pinkpanther-value">
                    <h3>Mobile-first</h3>
                    <p>Over 70% of the internets traffic comes from mobile devices. Catering towards the majority of users is vital.</p>
                </div>
                <div className="pinkpanther-value">
                    <h3>Next.js router</h3>
                    <p>As part of an ongoing refactor, Next.js will replace React Router to enhance performance and scalability.</p>
                </div>
            </div>
            <div className="pinkpanther-quote">
                <p><i>‘At The Diamond Store, our heritage reflects a unique blend of sustainability efforts, exceptional craftsmanship, and innovative design. Celebrated with numerous accolades, we continually set the bar high, crafting jewellery that symbolises our dedication and rich legacy.’</i></p>
                <p><b>— Jane Doe, CEO & Co-Founder</b></p>
            </div>
        </div>
    );

}

export default AboutSection;
