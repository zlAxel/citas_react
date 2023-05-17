
function Mensajes({ tipo, mensaje }) {

    let clase

    if (tipo === "Error") {
        clase = "bg-red-400";
    } else if (tipo === "Warning") {
        clase = "bg-yellow-400";
    } else if (tipo === "Success") {
        clase = "bg-green-400";
    }

    return (
        <div className={` ${ clase } text-white text-center p-3 uppercase font-bold mt-5 rounded `}>
            <p>{ mensaje }</p>
        </div>
    )
}

export default Mensajes