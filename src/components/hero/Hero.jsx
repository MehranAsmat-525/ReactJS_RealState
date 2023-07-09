import CountUp from "react-countup";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
const Hero = () => {
    return (
        <>
            <section className="hero_wrapper">
                <div className="hero_left">
                    <div className="oranges"></div>
                    <h1 className="title">
                        Discover <br /> Most Suitable <br /> Property
                    </h1>
                    <p className="para">
                        Find a variety of properties that suit you very easilty
                        <br />
                        Forget all difficulties in finding a residence for you
                    </p>
                    <div className="search">
                        <HiLocationMarker color="blue" size={29} />
                        <input type="text" name="" id="" />
                        <button>Search</button>
                    </div>
                    <div className="count">
                        <div className="first">
                            <CountUp
                                className="counter"
                                start={1000}
                                end={2000}
                                duration={2}
                            />
                            <span className="plus">+</span>
                            <br />
                            <span className="text">Premium Product</span>
                        </div>
                        <div className="sec">
                            <CountUp
                                className="counter"
                                start={1000}
                                end={2600}
                                duration={2}
                            />
                            <span className="plus">+</span>
                            <br />
                            <span className="text">Happy Customer</span>
                        </div>
                        <div className="third">
                            <CountUp
                                className="counter"
                                start={1}
                                end={30}
                                duration={2}
                            />
                            <span className="plus">+</span>
                            <br />
                            <span className="text">Award Winning</span>
                        </div>
                    </div>
                </div>
                <div className="hero_right">
                    <img src="./hero-image.png" alt="" />
                </div>
            </section>
        </>
    );
};

export default Hero;
