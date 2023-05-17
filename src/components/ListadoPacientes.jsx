import Paciente from "./Paciente"

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
            <p className="text-lg mt-10 text-center mb-5">
                Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            <div className="md:h-screen overflow-y-scroll">

                { pacientes && pacientes.length ? (
                    <>
                        { pacientes.map( paciente => (
                            <Paciente key={ paciente.id } paciente={ paciente } setPaciente={ setPaciente } eliminarPaciente={ eliminarPaciente } />
                        )) }
                    </>
                ) : 
                    <div className="w-full text-center pt-10 font-bold text-1xl">
                        Aún no hay pacientes, agregalos y <span className="text-indigo-600">aparecerán aquí</span>
                    </div>
                }

            </div>

        </div>
    )
}

export default ListadoPacientes
