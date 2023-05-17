
function Paciente({ paciente, setPaciente, eliminarPaciente }) {

    const { nombre, dueño, correo, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        if(confirm('¿Estás seguro de eliminar el registro?')){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mx-5 bg-white shadow-md px-5 py-7 rounded-xl mb-4">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:
                <span className="font-normal normal-case pl-1">{ nombre }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Dueño:
                <span className="font-normal normal-case pl-1">{ dueño }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo:
                <span className="font-normal normal-case pl-1">{ correo }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de alta:
                <span className="font-normal normal-case pl-1">{ fecha }</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas:
                <span className="font-normal normal-case pl-1">{ sintomas }</span>
            </p>

            <div className="flex gap-3 mt-6">
                <button onClick={ () => setPaciente(paciente) } className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
                <button onClick={ handleEliminar } className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg">Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente