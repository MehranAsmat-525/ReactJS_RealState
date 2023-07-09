import "./header.css";
const Header = () => {
    return (
        <>
            <div className="h_wrapper">
                <div className=" h_container">
                    <img src="./logo.png" alt="" width={100} />
                    <div className="  h_menu ">
                        <a href="">Residencies</a>
                        <a href="">Our Values</a>
                        <a href="">Contact us</a>
                        <a href="">Started</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
