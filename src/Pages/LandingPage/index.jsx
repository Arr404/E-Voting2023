import "./style.css";
import Hero from "../Component/Hero"
import {Link} from "react-router-dom";
import {BsArrowLeftCircle} from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Landing = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    const imgUrl = [
        "https://cdn.discordapp.com/attachments/815944558948909076/1076701720811405372/DSCF4076.JPG",
        "https://cdn.discordapp.com/attachments/815944558948909076/1076701721532829746/DSCF4083.JPG",
        "https://cdn.discordapp.com/attachments/815944558948909076/1076701722078093372/IMG_20221209_104624.jpg",
        "https://cdn.discordapp.com/attachments/815944558948909076/1076701722552041513/670600.jpg",
        "https://cdn.discordapp.com/attachments/815944558948909076/1076701722770149486/20221207153844_IMG_8447.JPG",
        "https://cdn.discordapp.com/attachments/815944558948909076/1076701723181195355/20221207162908_IMG_8636.JPG",
        "https://cdn.discordapp.com/attachments/815944558948909076/1076701723697086544/20221207163512_IMG_8657.JPG",
        "https://cdn.discordapp.com/attachments/815944558948909076/1089923226894860338/DSCF4700_1.JPG",
        "https://cdn.discordapp.com/attachments/815944558948909076/1089923228178325634/DSCF4765.JPG",
        "https://cdn.discordapp.com/attachments/815944558948909076/1089923228828434584/IMG_4835.JPG",
        "https://cdn.discordapp.com/attachments/815944558948909076/1089923229172375552/IMG_5173.JPG",
        "https://cdn.discordapp.com/attachments/815944558948909076/1089923229478551602/IMG_5243.JPG"
    ];
    return(
        <div className="landing">
            <Hero/>
            <Link to="/dashboard">
                <button  id="buttonLogin" className="buttonLogin">
                    <div className="loginText">Masuk</div>
                </button>
           </Link>

            <div className="gallery">
                <div className="slider">
                <Slider {...settings}>
                    {imgUrl.map((img, id) => (
                        <div key={id}>
                            <img
                                src={img}
                                className="image-gallery"
                                alt={"photo" + id}
                            />
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
            <div className="kotak">

            </div>
        </div>
    )
}

export default Landing;
