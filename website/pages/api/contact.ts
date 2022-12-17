import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2),
  mobile: z.string().min(7),
  message: z.string().min(2),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, mobile, message } = ContactSchema.parse(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'silearningcenterwebsite@gmail.com',
      pass: 'vceyuwwnqjswincj',
    },
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"SI Learning Center" <silearningcenterwebsite@gmail.com>', // sender address
    to: 'hfayax5@gmail.com', // list of receivers
    subject: 'Message Received via Contact Us Form', // Subject line
    html: /*html*/ `
          <div style='margin:3rem auto; max-width:400px; padding:2rem; border:1px solid #94a3b8; border-radius:10px; color:#1e293b; 
          font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot; !important;'>
            <h2 style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; font-size: 20px; font-weight: 600; line-height: 1.25 !important;">Message Details</h2>
            <ul style='font-size: 16px; padding:0; margin:0; margin-top:1.25rem; list-style:none; line-height:1.5;'>
              <li style='margin:0; margin-top:0.75rem'>
                <div style='width: 150px; font-weight: 600; margin-bottom:2px'>Name</div>
                <div>${name}</div>
              </li>
              <li style='margin:0; margin-top:0.75rem'>
                <div style='width: 150px; font-weight: 600; margin-bottom:2px'>Mobile Number</div>
                <a href='tel:${mobile}'>${mobile}</a>
              </li>
              <li style='margin:0; margin-top:0.75rem'>
                <div style='width: 150px; font-weight: 600; margin-bottom:2px'>Message</div>
                <div>${message}</div>
              </li>
            </ul>
          </div>
    `,
  })

  console.log('Message sent: %s', info.messageId)

  res.status(200).json({ message: 'success' })
}
