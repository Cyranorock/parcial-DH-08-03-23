import { useState } from "react";
import Card from "./Card";

const validateUserName = (userName) => {
    const noSpaces= userName.trim();
    const userNameAsArray = userName.split("")
    if(noSpaces.length >=3 && userNameAsArray[0] !== " ") {
        return true;
    } else {
        return false;
    }
}

const validateUserFavBand = (userName) => {
    const noSpaces= userName.trim();
    if(noSpaces.length >=6) {
        return true;
    } else {
        return false;
    }
}
export default function Formulario () {
    const [userName, setUserName] = useState("")
    const [formComplete, setFormComplete] = useState(false)
    const [userFavband, setUserFavband] = useState("")

    const onChangeUserName = (e) => {
        setFormComplete(false);

        setUserName(e.target.value);

    }   
    const onChangeUserFavband = (e) => {
        setFormComplete(false);

        setUserFavband(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        
        const isUsernameValid = validateUserName(userName)
        const isFavBandValid = validateUserFavBand(userFavband)
        if(isUsernameValid && isFavBandValid) {
            setFormComplete(true);
        } else {
            setFormComplete(false);
            alert("Por favor chequea que la información sea correcta");
        }
        
        };
    
        return (
        <div className="App">
            <h3>Por favor completar</h3>
            <form onSubmit={onSubmitForm}>
                <div><input type="text" placeholder="Nombre de usuario" value={userName} onChange={onChangeUserName}/></div>
                <div><input type="text" placeholder="Banda Favorita" value={userFavband} onChange={onChangeUserFavband}/></div>
                <button type="submit">Enviar</button>    
            </form>

            {formComplete ? <Card userName={userName} banda={userFavband} /> : null}
        </div>
        
    );
}
