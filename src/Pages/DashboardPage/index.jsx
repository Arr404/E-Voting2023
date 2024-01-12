import "./style.css"
import Nav from "../Component/Nav"
import items from "../Component/Nav/NavData"
import data from "./dasData"
import AnimatedBackground from "../Component/AnimatedBackground";
import {getUserToken, setTokenHasil} from "../../utils/auth";
import {useEffect} from "react";

const Dashboard = () =>{
    const hoak = getUserToken();

    console.log(hoak)
    return(
        <div className="pilih">
            <AnimatedBackground/>
            <Nav items={items}/>
            <br/>
            <h1>&nbsp;&nbsp;&nbsp;HI {hoak}</h1>
            <main>
                <ul id="cards">
                    {data.map((items,index)=>(
                        <li className="card" id={items.index}>
                            <div className="card__content">
                                <div>
                                    <h2>{items.title}</h2>
                                    <p>{items.body}</p>
                                    <p><a href={items.konten} className="btn btn--accent">Lihat Konten</a></p>
                                </div>
                                <figure>
                                    <img src={items.link}
                                         alt="Image description"/>
                                </figure>
                            </div>
                        </li>
                    ))}


                </ul>
            </main>
        </div>
    )
}
export default Dashboard;
