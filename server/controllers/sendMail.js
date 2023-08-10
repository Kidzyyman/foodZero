import nodemailer from 'nodemailer'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const createTransporter = () => {
	return nodemailer.createTransport({
		service: 'Yandex',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	})
}

const createMailTemplate = ({ firstName, lastName, email }) => {
	return `
    <table role="presentation" class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
      <tr>
        <td>
          <div class="header" style="text-align: center; padding: 20px 0;">
            <img src="cid:logoFood" alt="FoodZero Logo" width="100">
            <h1 style="margin: 0; color: #333333;">Thank You for Your Order</h1>
          </div>
          <div class="content" style="padding: 20px 0; border-top: 1px solid #dddddd;">
            <p class="message" style="font-size: 18px; line-height: 1.5; color: #333333; margin-bottom: 20px;">
              Thank you for placing your order with us. Our manager will contact you within 5 minutes.
            </p>
            <p class="info" style="font-size: 16px; color: #777777;">
              <strong>First Name:</strong> ${firstName}<br>
              <strong>Last Name:</strong> ${lastName}<br>
              <strong>Email:</strong> ${email}
            </p>
          </div>
        </td>
      </tr>
    </table>
  `
}

export const sendReservationMail = (req, res) => {
	const transporter = createTransporter()
	const { firstName, lastName, email } = req.body
	const mailTemplate = createMailTemplate({ firstName, lastName, email })

	const mailOptions = {
		from: req.body.email,
		to: 'maxim.zhuravlyov111@yandex.ru',
		subject: 'FoodZero',
		html: mailTemplate,
		attachments: [
			{
				filename: 'logoFood.png',
				path: join(__dirname, '../uploads/logoFood.png'),
				cid: 'logoFood',
			},
		],
	}

	transporter.sendMail(mailOptions, error => {
		if (error) {
			console.error('Error sending email:', error)
			res.status(500).send('Email sending failed')
		} else {
			console.log('Email sent successfully')
			res.status(200).send('Email sent successfully')
		}
	})
}
