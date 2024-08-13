import React from "react";

export default function Contact() {
    return (
        <>
            <h2>Formulario de contacto</h2>
            <div className="container">
                <form>
                    <div className="flex">
                        <div>
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="apellidos">Apellidos</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <label for="email" class="form-label">Correo electrónico</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label for="mensaje" class="form-label">Mensaje</label>
                        <textarea rows="4"></textarea>
                    </div>
                    <div className="boton">
                        <input className="enviar" type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </>
    );
}