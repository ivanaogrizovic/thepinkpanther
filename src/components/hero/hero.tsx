import './hero.scss';

function Hero({ text, image }: any) {

    return (
        <div className="pinkpanther-hero">
            <h1>{text}</h1>
            <img src={image} alt="" />
        </div>
    );

}

export default Hero;
