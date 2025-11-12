import { Link } from 'react-router-dom';
import Hero from '../components/hero/hero';
import weddingBands from '../assets/wedding-bands.webp';
import fatCat from '../assets/fat-cat.webp';

function ComingSoon() {

    return (
        <>
            <Hero image={weddingBands} />
            <div className='pinkpanther-coming-soon -fade-in'>
                <h3>This section is coming soon, stay tuned</h3>
                <p>In the meantime, enjoy this picture of a cat, and a link to the <Link to='shop' className='pinkpanther-cta-link'>Homepage →</Link></p>
                <img className='pinkpanther-placeholder -fade-in' src={fatCat} alt=""></img>
            </div>
        </>
    );
}

export default ComingSoon;