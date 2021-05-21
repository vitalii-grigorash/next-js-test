import { nodemailerConfig } from '../../nodemailerConfig';

export default (req, res) => {

    const data = req.body;

    if (data.access) {

        const nodemailer = require('nodemailer');

        const smtpTransport = nodemailer.createTransport({
            service: nodemailerConfig.service,
            port: nodemailerConfig.port,
            auth: {
                user: nodemailerConfig.senderMail,
                pass: nodemailerConfig.senderPassword,
            }
        })

        const mailOptions = {
            from: nodemailerConfig.senderMail,
            to: nodemailerConfig.recipientMail,
            subject: `Сообщение от ${data.name}`,
            html: `
                <h3>Форма обратной связи с сайта:</h3>
                <h3>${nodemailerConfig.website}</h3>
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
                console.log(data)
            }
        })
        smtpTransport.close();

    } else {
        res.status(500).send({ message: `What are you doing here? Mmmm...? o_O ` });
    }

}
