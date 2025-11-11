import { useState } from 'react';
import diamondExpert from '../../assets/diamond-expert.jpg';
import chooseGem from '../../assets/choose-gem.webp';
import chooseMetal from '../../assets/choose-metal.webp';
import findFit from '../../assets/findFit.webp';
import personalDetails from '../../assets/customise.webp';
import './booking-process.scss';

function BookingProcess () {

    const [activeStep, setActiveStep] = useState<number | null>(null);

    const images = [chooseGem, chooseMetal, findFit, personalDetails];
    const processSteps = [
        {
        title: '1. Choose the Gem',
        text: 'Begin with the centrepiece: the stone. Explore different cuts, colours, and carats to find the right balance between beauty, quality, and budget.',
        },
        {
        title: '2. Choose the Metal',
        text: 'The band sets the tone. Platinum offers strength, while yellow, white, and rose gold each bring a distinct character to your chosen design.',
        },
        {
        title: '3. Find the Right Fit',
        text: 'Comfort matters as much as style. We’ll help you measure the perfect size and choose proportions that look and feel right.',
        },
        {
        title: '4. Add Personal Details',
        text: 'Finish with meaning. From an engraved message to a halo, details make the ring truly yours.',
        },
    ];

    return (
        <div className='pinkpanther-booking-process-wrapper'>
            <div className='pinkpanther-booking-process'>
                <h3>How we help you find the perfect ring</h3>
                <p>We know this moment can be stressful. Our experts will guide you through each step with clarity and care, so your ring feels as meaningful as the moment it represents.</p>
                <div className='pinkpanther-booking-process-content'>
                    <img
                        src={activeStep !== null ? images[activeStep] : diamondExpert}
                        alt=''
                    />
                    <ul className='pinkpanther-booking-process-list'>
                        {processSteps.map((item, index) => (
                            <li
                                key={index}
                                className='pinkpanther-booking-process-card'
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                <p className='-microcopy -bold'>{item.title}</p>
                                <p>{item.text}</p>
                            </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookingProcess
 