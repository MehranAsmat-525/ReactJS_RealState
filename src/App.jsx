import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Residense from "./components/residencies/Residense";
import Value from "./components/value/Value";

const App = () => {
    return (
        <>
            <div className="app">
                <div className="white_gradient"></div>
                <Header />
                <Hero />
            </div>
            <Companies />
            <Residense />
            <Value />
        </>
    );
};

export default App;
