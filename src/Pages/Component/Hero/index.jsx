import "./style.css"
import Video from "../../../Media/hero.mp4"
import Logo from "../../../Media/logo-pemilu.png"
import Hoak from "../../../Media/page-awal.png"
import {ReactSVG} from "react-svg";

const Hero = () =>{
    return(
        <>
          <div className="hero-container">
            {/*<ReactSVG className="hoak" src={Hoak} />*/}
            <img className="hoak" src={Hoak}/>
            {/*<div className="hero-content">*/}
            {/*  <h1 className="sm:text-6xl text-4xl font-black">PEMILU HMT-ITB</h1>*/}
            {/*  <h1 className="sm:text-6xl text-4xl font-black">PERIODE 2023-2024</h1>*/}
            {/*</div>*/}
          </div>
        </>
    );
}

export default Hero;
