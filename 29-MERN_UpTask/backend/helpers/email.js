import nodemailer from 'nodemailer'

export const emailResgistro = async (datos) => {
    // console.log('DATOS: ', datos)
    const { email, nombre, token } = datos

    // TODO: Mover hacia variables de entorno
    const  transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "96b9393f8f778b",
          pass: "250c4258069711"
        }
    });

    // Informacion del email
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Comprueba tu cuenta",
        text: "Comprueva tu cuenta en UpTask",
        html: `
        <p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</p>

        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>

        <p>Si tu no create esta cuenta, puedes ignorar el mensaje</p>
        `
    })
}

export const emailOlvidePassword = async (datos) => {
    const { email, nombre, token } = datos

    // TODO: Mover hacia variables de entorno
    const  transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "96b9393f8f778b",
          pass: "250c4258069711"
        }
    });

    // Informacion del email
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Reestablece tu Password",
        text: "Reestablece tu Password",
        html: `
        <p>Hola: ${nombre} has solicitado reestablecer tu password</p>

        <p>Sigue el siguiente enlace para generar un nuevo password:</p>

        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>

        <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
        `
    })
}