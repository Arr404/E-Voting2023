import "./style.css"
import Gorden from '../../../Media/gorden.png';

const animatedBackground = () =>{
    return (
        <div className="bgSemua">
            <img className="gorden-kiri" src={Gorden}/>
            <img className="gorden-kanan" src={Gorden}/>
        </div>
    )
}
export default animatedBackground;
