export default (req, res) => {
    const nodemailer = require('nodemailer');
    require('dotenv').config()
    const PASSWORD = process.env.password
    const data = req.body;
    const smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'vitalii.grigorash.job@gmail.com',
            pass: PASSWORD,
        }
    });

    const mailOptions = {
        from: 'vitalii.grigorash.job@gmail.com',
        to: 'vitalii.grigorash@yandex.ru',
        subject: `Сообщение от ${data.name}`,
        html: `
            <h3>Форма обратной связи с сайта:</h3>
            <h3>stroi.ooorobip.beget.tech</h3>
            <ul>
                <li style="margin-bottom: 10px"><span style="font-weight:bold">Имя:</span> ${data.name}</li>
                <li style="margin-bottom: 10px"><span style="font-weight:bold">Номер телефона:</span> ${data.number}</li>
            </ul>
        `
    }

    smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(error)
        } else {
            res.send(info);
            console.log(info);
        }
    })
    smtpTransport.close();
}
