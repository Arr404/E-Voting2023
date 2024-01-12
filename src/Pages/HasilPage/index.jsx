import React, {display, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Nav from "../Component/Nav";
import items from "../Component/Nav/NavData"
import {useEffect} from "react";
import Swal from "sweetalert2";
import {getTokenHasil, getUserToken, setTokenHasil} from "../../utils/auth";
import CryptoJS from "crypto-js";
import AnimatedBackground from "../Component/AnimatedBackground";
ChartJS.register(ArcElement, Tooltip, Legend);

export const dataEdit = {
    labels:['Athallah Rasendriya', 'Rahmat Iqbal', 'Abstain Ketua Umum HMT-ITB'],
    data: [123, 131, 5],
}
export const dataGanesha = [
    'Athallah Rasendriya : 123 Suara / 47.5%\n',
    'Rahmat Iqbal : 131 Suara / 50.6%\n',
    'Abstain Ketua Umum HMT-ITB : 5 Suara / 1.9%\n',
    'Total suara Ganesha : 259 Suara / 100%\n',
    'Fanny Nur Rakhmawati : 5 Suara / 6.5%\n',
    'Farhan Habib Wirahadi : 45 Suara / 58.4%\n',
    'Edwin Gusnaidi Ginting : 25 Suara / 32.5%\n',
    'Abstain Ketua Umum Komisariat HMT-ITB : 2 Suara / 2.6%\n',
    'Total suara Cirebon : 77 Suara / 100%\n',
]
export const dataKomisariatEdit = {
    labels: ['Fanny Nur Rakhmawati', 'Farhan Habib Wirahadi', 'Edwin Gusnaidi Ginting','Abstain Ketua Umum Komisariat HMT-ITB'],
    data: [5, 45, 25, 2],
}

export const data = {
    labels: dataEdit.labels,
    datasets: [
        {
            label: '# of Votes',
            data: dataEdit.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const dataKomisariat = {
    labels: dataKomisariatEdit.labels,
    datasets: [
        {
            label: '# of Votes',
            data: dataKomisariatEdit.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function HasilPage() {
    const [tokens,setToken] = useState(false);
    const [times,setTimes] = useState(0);
    const [secret,setSecret] = useState("hoak")
    const [bytes,setBytes] = useState(CryptoJS.AES.decrypt("U2FsdGVkX1+m7zcsOmudXduWyj147uqzmTRIKrRSHag=",secret))
    useEffect(() => {

        try {
            Swal.fire({
                title: 'Masukkan token',
                input: 'text',
                text: 'Token hanya dapat digunakan sekali',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Pilih ',
                showLoaderOnConfirm: true,
                preConfirm: (token) => {
                    try {
                        if (JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) === token) {
                            setToken(true)
                            setTimes(times+1)
                            return 0
                        }else{
                            setToken(false)
                            throw new Error("Token Salah")
                        }
                        return 0
                    }catch(error){
                            Swal.showValidationMessage(
                                `Request failed: ${error}`
                            )
                        }
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    setToken(true)
                    setTimes(times+1)
                    setTokenHasil(parseInt(getTokenHasil())+1)
                }

            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
            });
        }
        console.log(getTokenHasil(),getTokenHasil() >1)
        if(parseInt(getTokenHasil()) >= 1){
            Swal.fire({
                customClass: 'swal-wide',
                title: `Maaf Token hanya 1 kali pakai`,
            })
        }
    }, [])
    return (
        <>

            <Nav items={items}/>
            <div className="contentsss" style={{visibility: tokens&&(times===1)? "visible":"hidden", color:"blue"}}>
                <div style={{position:"relative", marginBottom:"1%", padding:"1%", float:"left"}}>
                    <Doughnut
                        data={data} />
                </div>
                <div style={{position:"relative", marginBottom:"1%", padding:"1%", float:"left"}}>
                    <Doughnut data={dataKomisariat} />
                </div>
                <br/>
                <div style={{position:"relative", marginBottom:"1%", padding:"1%", float:"none"}}>
                    {dataGanesha.map((items,index)=>(
                        <p>{items}</p>
                    ))}
                </div>
            </div>
        </>
        )

}
