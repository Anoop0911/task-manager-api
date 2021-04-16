const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mk1968paralko@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mk1968paralko@gmail.com',
        subject: 'Account Deleted!',
        text: `Goodbye ${name}. Is there anything we can do to keep you on board?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}

