import { Link } from "react-router-dom";
import './button.scss'

function Button({ text, buttonClass }: any) {

    return (
        <div className="button-wrapper">
            <div><Link to="/book-an-appointment"><h3 className={buttonClass}>{text}</h3></Link></div>
        </div>
    );

}

export default Button;