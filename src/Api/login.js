import service from "../utils/request";

export default class Auth{
    static baseGroupURL = '';

    static async postAuth(username,password){
        return await service.post(`${this.baseGroupURL}/authentications`, {
            "username": username,
            "password": password,
        });
    }
    static async putDefault(nim){
        return await service.put(`${this.baseGroupURL}/changeDef`, {
            "nim": nim,
        });
    }
    static async gantiPassword(password,newPassword){
        return await service.put(`${this.baseGroupURL}/users`,{
            "password":password,
            "newPassword": newPassword,
        })
    }
}
