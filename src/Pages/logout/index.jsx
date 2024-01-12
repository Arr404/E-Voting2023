import Swal from "sweetalert2";
import {removeAccessToken} from "../../utils/auth";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()
    Swal.fire({
        icon: 'warning',
        title: 'Konfirmasi',
        text: 'Apakah anda yakin ingin keluar?',
        showCancelButton: true,
        cancelButtonText: 'Batal',
        confirmButtonText: 'Ya, keluar'
    }).then((response) => {
        if (response.isConfirmed) {
            removeAccessToken();
            navigate("/");
            window.location.reload();
        }else{
            navigate("/dashboard");
            window.location.reload();
        }
    });
}

export default Logout
