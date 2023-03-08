import { useState } from "react"

const Saludo = ({nombre, children}) => {
    return (
        <>
        {children}
        <h1>{nombre}</h1>
        </>
    )
}

const Bienvenida = () => {
    const [userName, setUserName] = useState("")
   
    return (   
            <h1>Hola {userName}</h1>
   ) 
}

export default Bienvenida