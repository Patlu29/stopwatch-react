import { Link } from "react-router-dom";
import './About.css'
const Aboutus = () => { 
    return (
        <>
            <nav className="rainbow-border">
                <button><Link to="/Home" className="link">Home</Link> </button>
                <button><Link to="/StopWatch" className="link">Stop watch</Link></button>
            </nav>
            <div className="contact">
                <h1 className="mydet">Creator details :</h1>
                <h2 className="mydet1">E-mail---prakashrajan2908@gmail.com <br></br>
                PH & WP---7604875619.<br></br>
                Address---Rayagiri-627764,Tenkasi</h2>
            </div>
        </>
    )
    }; 
    export default Aboutus;