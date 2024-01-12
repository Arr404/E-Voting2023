import "./style.css";
import React, {useState} from 'react';
import {useRef, useEffect} from 'react';
import Background from "../Component/AnimatedBackground";
import Buttons from "../Component/NextButton";
import {Link, Navigate, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {getAccessToken, getUserToken, setAccessToken, setTokenHasil, setUserToken} from "../../utils/auth";
import Auth from "../../Api/login";
const Login = () =>{
	const navigate = useNavigate()
	const [username, SetUsername] = useState("");
	const [password, SetPassword] = useState("");
	useEffect(() => {
		if (!(getAccessToken() === null)) {
			setTokenHasil(0)
			navigate("/dashboard");
		}

	});
//     this.signUp = React.createRef();
//     this.signIn = React.createRef();
//     this.container = React.createRef();
	const loginFun = (e) =>{
		e.preventDefault()
		try {
			Auth.postAuth(username, password).then((result) => {
				console.log(result)
				if (result.data.status === "success") {
					setAccessToken(result.data.data.accessToken);
					setUserToken(username);
					navigate("/dashboard");
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
        <>
            <Background/>
            <div class="container" id="container">
            	<div class="form-container sign-in-container">
            		<form onSubmit={loginFun}>
            			<h1>MASUK</h1>

            			<span>Masuk ke akun anda</span>
            			<input type="text" placeholder="username" onChange={e => SetUsername(e.target.value)}/>
            			<input type="password" placeholder="Kata sandi" onChange={e => SetPassword(e.target.value)}/>
            				<button id="buttonlogins2">MASUK</button>

            		</form>
            	</div>
            </div>
           <Buttons/>

        </>
    );
}

export default Login;
