import "./residense.css";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/css";
import data from "../../utils/ApiDatas";

const Residense = () => {
    return (
        <>
            <section className="r_wrapper">
                <span className="Best">Best choice</span>
                <span className="Popular">Popular Residencies</span>
                <div className="grid">
                    {data.map((card, i) => {
                        return (
                            <>
                                <div key={i}>
                                    <div className="r_card">
                                        <img src={card.image} alt="" /> <br />
                                        <span className="both_api">
                                            <span className="dollar_api">
                                                $
                                            </span>
                                            <span className="price_api">
                                                {card.price}
                                            </span>
                                        </span>
                                        <br />
                                        <span className="name_api">
                                            {card.name}
                                        </span>{" "}
                                        <br />
                                        <span className="detail_api">
                                            {card.detail}
                                        </span>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Residense;
