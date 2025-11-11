import './hero.scss';

function Hero({ image }: any) {

    return (
        <div className="pinkpanther-hero">
            <img src={image} alt="" />
        </div>
    );

}

export default Hero;
