import Nav from "../Component/Nav";
import items from "../Component/Nav/NavData";
import Auth from "../../Api/login";
import {setAccessToken, setUserToken} from "../../utils/auth";
import Swal from "sweetalert2";
import {useState} from "react";
const CzangePage = ()=>{
    const [nim, setNim] = useState("");
    const ChangeFun = (e) =>{
        console.log(nim)
        e.preventDefault()
        try {
            Auth.putDefault(nim).then((result) => {
                console.log(result)
                if (result.data.status === "success") {
                    Swal.fire({
                        icon: "success",
                        title: "yeyy diganti",
                        text: ""+nim.toString(),
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Password atau username salah"
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
    }
    return(
        <div>
            <Nav items={items}/>
            <h1>Ganti Password ke default</h1>
            <form onSubmit={ChangeFun}>
                <label htmlFor="fname">NIM :</label>
                <input type="text" id="fname" name="fname" onChange={e => setNim(e.target.value)}/>
                    <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CzangePage;
