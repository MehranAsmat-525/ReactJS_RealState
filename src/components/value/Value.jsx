import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import data from "../../utils/accordion";
const Value = () => {
    return (
        <>
            <section className="r_wrapper_value">
                <div className="left">
                    <img src="./value.png" alt="" />
                </div>
                <div className="right">
                    <p className="value_first_para">Our Value</p>
                    <p className="value_first_sec">Value We Give to You</p>
                    <p className="value_first_third">
                        We always ready to help by providijng the best services
                        for you. <br /> We beleive a good blace to live can make
                        your life better
                    </p>
                    <Accordion
                        className="accordian_value"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            return (
                                <>
                                    <AccordionItem
                                        className="accordianItem_value"
                                        key={i}
                                        uuid={i}
                                    >
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <div className="icon_value_right">
                                                    <span className="acc_first">{item.icon}</span>
                                                    <span className="value_heading">{item.heading}</span>
                                                    <span className="icon">
                                                        <MdOutlineArrowDropDown
                                                            size={20}
                                                        />
                                                    </span>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="value_details">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </>
                            );
                        })}
                    </Accordion>
                </div>
            </section>
        </>
    );
};

export default Value;
