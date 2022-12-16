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
    from: '"Hassan Fayaz1" <fayax555@gmail.com>', // sender address
    to: 'hfayax5@gmail.com', // list of receivers
    subject: 'Admission Form Received', // Subject line
    html: `
          <div style='font-family: Lucida Sans Unicode;'>
            <h1 style='font-size: 1.75rem; font-weight: bold; margin:0; padding:0;'>Admission Form</h1>
            <ul style='padding:0; margin:0; font-size: 1rem; margin-top:0.75rem;'>
              <li style= 'display: flex; margin:0; margin-top:0.25rem'>
                <span style= 'width: 150px; font-weight: 600; color: #434446;'>Student Name</span>
                <span>${studentName}</span>
              </li>
              <li style= 'display: flex; margin:0; margin-top:0.25rem'>
                <span style= 'width: 150px; font-weight: 700; color: #434446;'>Parent Name</span>
                <span>${parentName}</span>
              </li>
              <li style= 'display: flex; margin:0; margin-top:0.25rem'>
                <span style= 'width: 150px; font-weight: bold; color: #434446;'>Mobile Number</span>
                <span>${mobile}</span>
              </li>
              <li style= 'display: flex; margin:0; margin-top:0.25rem'>
                <span style= 'width: 150px; font-weight: bold; color: #434446;'>Program</span>
                <span>${program}</span>
              </li>
            </ul>
          </div>
    `, // html body
  })

  console.log('Message sent: %s', info.messageId)

  res.status(200).json({ message: 'success' })
}
