import "./style.css"
import Nav from "../Component/Nav"
import items from "../Component/Nav/NavData"
const Result = () => {
    return (
        <>
            <Nav items={items}/>
            <button className="open-me">
                BUKA HASIL SUARA
            </button>
        </>

    )
}

export default Result;
