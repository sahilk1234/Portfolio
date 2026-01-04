'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function action(prevState: any, formData: FormData) {
  try {
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const subject = String(formData.get('subject') || 'New Contact Form Submission')
    const message = String(formData.get('message') || '')

    if (!name || !email || !message) {
      return { success: false, message: 'Please fill all required fields.' }
    }

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', 
      to: 'sahilkhadtare29@gmail.com',              
      replyTo: email,
      subject,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    })

    return { success: true, message: 'Thanks! Your message has been sent.' }
  } catch (err) {
    console.error(err)
    return { success: false, message: 'Failed to send. Please try again later.' }
  }
}
