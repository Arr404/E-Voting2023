import "./style.scss"
import Nav from "../Component/Nav"
import items from "../Component/Nav/NavData"
import AnimatedBackground from "../Component/AnimatedBackground";
import Auth from "../../Api/login";
import Swal from "sweetalert2";
import {useState} from "react";
const Profile = () => {
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');
    const [re,setRe] = useState('');

    const changePass = (e) =>{
        console.log(re,rePassword,password);
        e.preventDefault()
        if(re === rePassword){
        try {
            Auth.gantiPassword(password, rePassword).then((result) => {
                console.log(result.data.status)
                if (result.data.status === "success") {
                    Swal.fire({
                        icon: "success",
                        title: "Berhasil",
                        text: "Password berhasil diganti"
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Password salah"
                    });
                }
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
            });
        }
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password berbeda"
            });
        }
    }

    return (
        <div className="profile">
            <Nav items={items}/>
            <AnimatedBackground/>
            <div className="login-box">
                <h2>Ganti Kata Sandi
                </h2>
                <form onSubmit={changePass}>
                    <div className="user-box">
                        <input type="password" name="" required=""  onChange={e => setPassword(e.target.value)}/>
                            <label>Kata Sandi Sekarang</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""  onChange={e => setRe(e.target.value)}/>
                            <label>Kata Sandi Baru</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""  onChange={e => setRePassword(e.target.value)} />
                        <label>Ulangi Kata Sandi Baru</label>
                    </div>
                    <button>Ganti</button>
                </form>
            </div>
        </div>

    )
}

export default Profile;
