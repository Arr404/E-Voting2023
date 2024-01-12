import Nav from "../Component/Nav"
import "./style.scss"
import items from "../Component/Nav/NavData"
import {calonData, calonDataKomisariat} from "./calonData"
import Swal from "sweetalert2";
import pilihApi from "../../Api/pilih"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import AnimatedBackground from "../Component/AnimatedBackground";
import {getUserToken} from "../../utils/auth";

const PilihPage = () => {
    const [user,setUser] = useState(parseInt(getUserToken()));
    const [data,setData] = useState([]);

    useEffect(() => {
        if( (user >= 12120001 && user <=12120041 ) || (user >= 12121001 && user <= 12121038  ) ){
            setData(calonDataKomisariat)

        }else{
            setData(calonData)
        }

    }, []);

    const pilihFunction = (e) => {
        const index = e.currentTarget.getAttribute("data-value")
        e.preventDefault()
        try {
            Swal.fire({
                title: 'Masukkan token',
                input: 'text',

                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Pilih '+data[index].nama,
                showLoaderOnConfirm: true,
                preConfirm: (token) => {
                    return  pilihApi.postPilih("test", data[index].nim, token)
                    .then(response => {
                        console.log(response)
                            if (!(response.data.status === "success")) {
                                throw new Error(response.statusText)
                            }
                            return response
                        })
                        .catch(error => {
                            Swal.showValidationMessage(
                                `Request failed: ${error}`
                            )
                        })
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                console.log(result.isConfirmed)
                if (result.isConfirmed) {
                    Swal.fire({
                        customClass: 'swal-wide',
                        title: `Selamat `+getUserToken()+` telah memilih`,
                        imageUrl: `https://cdn.discordapp.com/attachments/815944558948909076/1089922692477636689/selamat_telah_memilih.png`
                    })
                }
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
            });
        }
    }

    return (
        <>
            <Nav items={items}/>
            <AnimatedBackground/>
            {data.map((item,index)=>(
                <div className="outer-div" data-value={index} onClick={pilihFunction}>
                    <div className="inner-div">
                        <div className="front">
                            <div className="front__bkg-photo"/>
                            <img className="front__face-photo" src={item.belakang}/>
                            <div className="front__text">
                                <h3 className="front__text-header">{item.nama}</h3>
                                <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"/>{item.calon}
                                </p>

                                <span className="front__text-hover">Pilih Saya</span>
                            </div>
                        </div>
                        <div className="back">
                            <img src={item.belakang} />
                        </div>
                    </div>
                </div>
            ))}


        </>
    )
}
export default PilihPage;
