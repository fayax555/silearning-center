import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const AdmissionSchema = z.object({
  studentName: z.string().min(2),
  parentName: z.string().min(2),
  mobile: z.string().min(7),
  program: z.string().min(2),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { studentName, parentName, mobile, program } = AdmissionSchema.parse(
    req.body
  )

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fayax555@gmail.com',
      pass: 'qobwgswzapmqxqgm',
    },
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Admission @ lomamv" <fayax555@gmail.com>', // sender address
    to: 'hfayax5@gmail.com', // list of receivers
    subject: 'Admission Form Received', // Subject line
    html: /*html*/ `
          <div style='margin:3rem auto; max-width:300px; padding:2rem; border:1px solid #475569; border-radius:10px; color:#1e293b; 
          font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot; !important;'>
          <h2 style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; font-size: 20px; font-weight: 600; line-height: 1.25 !important;">Admission Form Details</h2>
            <ul style='padding:0; margin:0; font-size: 16px; margin-top:1.75rem; line-height:1.6;'>
              <li style='display: flex; margin:0; margin-top:0.4rem'>
                <span style= 'width: 150px; font-weight: 600;'>Student Name</span>
                <span>${studentName}</span>
              </li>
              <li style='display: flex; margin:0; margin-top:0.4rem'>
                <span style='width: 150px; font-weight: 600;'>Parent Name</span>
                <span>${parentName}</span>
              </li>
              <li style='display: flex; margin:0; margin-top:0.4rem'>
                <span style='width: 150px; font-weight: 600;'>Mobile Number</span>
                <a href='tel:${mobile}'>${mobile}</a>
              </li>
              <li style='display: flex; margin:0; margin-top:0.4rem'>
                <span style='width: 150px; font-weight: 600;'>Program</span>
                <span>${program}</span>
              </li>
            </ul>
          </div>
    `,
  })

  console.log('Message sent: %s', info.messageId)

  res.status(200).json({ message: 'success' })
}
