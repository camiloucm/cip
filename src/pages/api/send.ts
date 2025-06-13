import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const NOMBRE = document.getElementById("nombre") as HTMLInputElement;
const EMAIL = document.getElementById("email") as HTMLInputElement;
const TELEFONO = document.getElementById("telefono") as HTMLInputElement;
const MENSAJE = document.getElementById("mensaje") as HTMLInputElement; 

export const GET: APIRoute = async () => {
    //Enviar email
   const { data, error } = await resend.emails.send({
        from: "Camilo <camiloucm@hotmail.es>",
        to: ["camiloucm@hotmail.es"],
        subject: "Correo de Prueba Resend",
        html: 
            `
                <h1>INFORMACIÓN DE LA PÁGINA WEB</h1>
                <p>Nombre: ${NOMBRE.value}</p>
                <p>Email: ${EMAIL.value}</p>
                <p>Teléfono: ${TELEFONO.value}</p>
                <p>Mensaje: ${MENSAJE.value}</p>
            `,
    });

    if(error){
        return new Response(JSON.stringify(error));
    }
    
    return new Response(JSON.stringify(data));
}

//re_BF6pzGti_8yKFUsvygwhMqbeiSUEAED75
//https://resend.com/docs/send-with-astro