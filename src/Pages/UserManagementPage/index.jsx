import Nav from "../Component/Nav";

import items from "../Component/Nav/NavData"

const UserManagementPage= () =>{
    return(
        <div className="userManagement">
            <Nav items={items}/>
        </div>
    )
}
export default UserManagementPage;
