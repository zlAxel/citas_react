import { useState, useEffect } from "react"
import Mensajes from "./Mensajes"

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

    const [mensaje, setMensaje] = useState('')
    
    const [nombre, setNombre] = useState('')
    const [dueño, setDueño] = useState('')
    const [correo, setCorreo] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    
    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setDueño(paciente.dueño)
            setCorreo(paciente.correo)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    

    const generarID = () => {
        const random = Math.random().toString(36).slice(2)
        const fecha  = Date.now().toString(36)
        
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validación de formulario

        if( [ nombre, dueño, correo, fecha, sintomas ].includes('') ){

            setMensaje("Todos los campos son obligatorios")

            setError(true)
            return
        }

        // Pasó la validación de campos vacíos
        setError(false)

        // Constucción del arreglo paciente

        const objetoPaciente = {
            nombre, 
            dueño, 
            correo, 
            fecha, 
            sintomas,
        }

        // Validar si está modificando un paciente

        if(paciente.id){
            
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes( pacientesActualizados )
            setPaciente({})

        }else{
            objetoPaciente.id = generarID()
            setPacientes( [ ...pacientes, objetoPaciente ] )
        }


        // Reseteando Formulario

        clearForm()

    }

    const clearForm = () => {
        setNombre('')
        setDueño('')
        setCorreo('')
        setFecha('')
        setSintomas('')

        if( paciente.id ){
            setPaciente({})
        }
    }
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
            <p className="text-lg mt-10 text-center mb-5">
                Añade pacientes y <span className="text-indigo-600 font-bold">administralos</span>
            </p>

            <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div>
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold pl-3">
                        Nombre de la mascota
                    </label>
                    <input type="text" id="mascota" value={ nombre } onChange={ (e) => setNombre(e.target.value) } placeholder="Ingresa el nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mt-7">
                    <label htmlFor="dueño" className="block text-gray-700 uppercase font-bold pl-3">
                        Nombre del dueño
                    </label>
                    <input type="text" id="dueño" value={ dueño } onChange={ (e) => setDueño(e.target.value) } placeholder="Ingresa el nombre del dueño" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mt-7">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold pl-3">
                        Correo del dueño
                    </label>
                    <input type="email" id="email" value={ correo } onChange={ (e) => setCorreo(e.target.value) } placeholder="Ingresa el nombre del dueño" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mt-7">
                    <label htmlFor="fechaAlta" className="block text-gray-700 uppercase font-bold pl-3">
                        Fecha del Alta
                    </label>
                    <input type="date" id="fechaAlta" value={ fecha } onChange={ (e) => setFecha(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mt-7">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold pl-3">
                        Síntomas de la mascota
                    </label>
                    <textarea id="sintomas" value={ sintomas } onChange={ (e) => setSintomas(e.target.value) } placeholder="Describe los síntomas de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
                </div>

                { error && 
                    <Mensajes tipo="Error" mensaje={ mensaje } />
                }
                <button type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all mt-7">
                    { paciente.id ? 'Editar paciente' : 'Agregar paciente' }
                </button>
                { paciente.id &&
                    <button onClick={ clearForm } className="w-full p-3 uppercase font-bold cursor-pointer transition-all mt-2">
                        Cancelar
                    </button>
                }
            </form>
        </div>
    )
}

export default Formulario