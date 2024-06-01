import Button from '../../components/button/button';
import './appointmnet-section.scss';


function AppointmentSection() {

    return (
        <div className='appointment-section-wrapper'>
            <h3>we are here to help you</h3>
            <p>The Pink Panther's Diamond Experts can assist you in choosing an engagement ring, personalising a wedding band or selecting a special anniversary gift.</p>
            <div className='button-container'><Button text="Book an appointment" buttonClass="button button-primary"></Button></div>
        </div>
    );
}

export default AppointmentSection;
