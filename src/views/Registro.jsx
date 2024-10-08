import { Link } from "react-router-dom";

function Registro() {
    return (
        <>
            <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
            <p>Crea tu Cuenta llenando el formulario</p>
            
            <div className="bg-white shadow-md rounded-sm mt-10 px-5 py-10">
                <form action="">
                    {/* Nombre */}
                    <div className="mb-4">
                        <label 
                            htmlFor="name"
                            className="text-slate-800"
                            >Nombre:</label>
                        <input 
                            type="text"
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="Tu nombre"
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label 
                            htmlFor="email"
                            className="text-slate-800"
                            >Email:</label>
                        <input 
                            type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Tu Email"
                        />
                    </div>
                    {/* Password */}
                    <div className="mb-4">
                        <label 
                            htmlFor="password"
                            className="text-slate-800"
                            >Password:</label>
                        <input 
                            type="password"
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="Tu Password"
                        />
                    </div>
                    {/* Repetir Password */}
                    <div className="mb-4">
                        <label 
                            htmlFor="password_confirmation"
                            className="text-slate-800"
                            >Repetir Password:</label>
                        <input 
                            type="password"
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password_confirmation"
                            placeholder="Repite tu password"
                        />
                    </div>
                    {/* Boton de Crear Cuenta */}
                    <input 
                        type="submit" 
                        value="Crear Cuenta"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>

            <nav className="mt-5">
                <Link to="/auth/login">
                    ¿Ya tienes una cuenta?, Inicia Sesión
                </Link>
            </nav>
        </>
    );
}

export default Registro;