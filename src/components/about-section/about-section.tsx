import './about-section.scss';

function AboutSection() {

    return (
        <>
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
                <p><i>‘Every glittering image on this site is a glamorous freeloader from the internet. Just some celebrities I temporarily convinced to appear in my front-end showcase. No ownership, no profit, no paparazzi rights claimed. No diamonds were purchased, sold, or harmed in the process — they’re basically on an unpaid modeling gig.’</i></p>
                <p><b>— Jane Doe, CEO & Co-Founder</b></p>
            </div>
        </>
    );

}

export default AboutSection;
