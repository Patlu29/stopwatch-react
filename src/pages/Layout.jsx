import { Outlet, Link } from "react-router-dom"; 
import "./Layout.css";
import StopWatch from "./StopWatch";
const Layout = () => { 
return ( 
    <>
        <nav className="rainbow-border">
            <button><Link to="/Home" className="link">Home</Link> </button>
            <button><Link to="/Aboutus" className="link">Aboutus</Link> </button>
            <button><Link to="/StopWatch" className="link">Stop watch</Link></button>
        </nav>
        <h2>Details about stopwatch :</h2>
        <h3>
            <ul>
                <li>A stopwatch is a timepiece designed to measure the amount of time that elapses between its activation and deactivation..</li><br />

                <li>A large digital version of a stopwatch designed for viewing at a distance, as in a sports stadium, is called a stop clock. In manual timing, the clock is started and stopped by a person pressing a button. In fully automatic time, both starting and stopping are triggered automatically, by sensors. The timing functions are traditionally controlled by two buttons on the case. Pressing the top button starts the timer running, and pressing the button a second time stops it, leaving the elapsed time displayed. A press of the second button then resets the stopwatch to zero. The second button is also used to record split times or lap times. When the split time button is pressed while the watch is running it allows the elapsed time to that point to be read, but the watch mechanism continues running to record total elapsed time. Pressing the split button a second time allows the watch to resume display of total time.</li>
            </ul>
        </h3>
        <h2 className="h2">
            click here to go stop watch 👇 or click the right corner</h2>
        <h2><button><Link to="/StopWatch" className="link2">Stop watch</Link></button></h2>
        <Outlet /> 
    </> 
  ) 
}; 
 
export default Layout; 