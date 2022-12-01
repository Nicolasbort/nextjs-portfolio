const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function createHTMLMessage(message, name, cellphone = '', email) {
  return `
    <div>
        <span style="font-weight:bold">Name: </span>
        <span>${name}</span>
        <br/>
        <span style="font-weight:bold">Email: </span>
        <span>${email}</span>
        <br/>
        <span style="font-weight:bold">Cellphone: </span>
        <span>${cellphone}</span>
        <br/>
        <br/>
        <span style="font-weight:bold">Message: </span>
        <span>${message}</span>
    </div>
  `;
}

export default (req, res) => {
  if (req.method == 'POST') {
    const { name, email, cellphone, message } = req.body;

    if (!name || !email || !message) {
      res.status(422).json({
        error: { pt: 'Dados incompletos', en: 'Missing paramenters' },
      });
      return;
    }

    console.table([name, email, cellphone, message]);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'New contact from Portfolio website',
      text: createHTMLMessage(message, name, cellphone, email),
      html: createHTMLMessage(message, name, cellphone, email),
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        res.status(200).json({
          error: {
            pt: `Falha ao enviar o email. Erro: ${err.response}`,
            en: `Failed to send email. Error: ${err.response}`,
          },
        });
      } else {
        res.status(200).json({
          message: {
            pt: 'E-mail enviado com sucesso!',
            en: 'E-mail successfully sent!',
          },
        });
      }
    });
  } else {
    res.status(400).json({
      error: {
        pt: 'Método de request inválido',
        en: 'Invalid request method',
      },
    });
  }
};
