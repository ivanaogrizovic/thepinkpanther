import { Link } from 'react-router-dom';
import './split-content.scss';

type SplitContentProps = {
    title: string;
    text: string;
    link: string;
    image: string;
}

function SplitContent({ title, text, link, image }: SplitContentProps) {
    return (
        <div className='pinkpanther-split-content'>
            <img src={image} className='pinkpanther-split-content-image slide-left' alt='' />
            <div className='pinkpanther-split-content-text -fade-in-up'>
                <h1>{title}</h1>
                <p>{text}</p>
                {link && <p><Link to='shop' className='pinkpanther-cta-link'>{link} →</Link></p>}
            </div>
        </div>
    );
}

export default SplitContent;
