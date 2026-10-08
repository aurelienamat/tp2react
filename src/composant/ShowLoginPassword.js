import React from "react";

const ShowLoginPassword = () => {
    var password = 'flocon';
    var login = 'root';

    const connexionInfo = {
        mdp : "whereIsFlocon",
        username : "cameras"
    }

    return (
        <div>
            <h1>Sans objets</h1>
            <label>login : {login}</label>
            <label>Password : {password}</label>
            <div>
                <h1>Attention j'utilise des objets js</h1>
            <label>login : {connexionInfo.username}</label>
            <label>Password : {connexionInfo.mdp}</label>
            </div>
        </div>
    )

}

export default ShowLoginPassword;
