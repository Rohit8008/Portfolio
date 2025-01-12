import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: Request) {
  const { firstName, lastName, email, mobile, service, message } =
    await req.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Rohit Mittal" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank You for Contacting Rohit Mittal | Full Stack Developer.`,
      html: `
    <p>Hi ${firstName} ${lastName},</p>
    <p>Thank you for reaching out to us! 🎉</p>
    <p>We've received your message and wanted to let you know that we truly value your time and input. Here's a summary of what you shared:</p>

    <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #7947df;">
      <p><strong>Your Message:</strong> ${message}</p>
    </blockquote>

    <p>We’ll get back to you as soon as possible, typically within 24-48 hours. In the meantime, if there’s anything else you’d like to share or if you have additional questions, feel free to reply to this email at mittalrohit701@gmail.com.</p>

    <p>Looking forward to collaborating with you!</p>

    <p>
      Best regards, <br>
      <strong>Rohit Mittal</strong> <br>
      Full Stack Web Developer <br>
      <a href="https://www.linkedin.com/in/rohit8001" style="color: #7947df; text-decoration: none;">LinkedIn</a> | 
      <a href="http://localhost:3000" style="color: #7947df; text-decoration: none;">Portfolio</a> |
      <a href="https://wa.me/6283930283" style="color: #7947df; text-decoration: none;">Whatsapp</a>
    </p>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
    <p style="font-size: 0.9em; color: #888;">You’re receiving this email because you reached out to us. If this was a mistake, please let us know, and we’ll take care of it immediately.</p>
  `,
    };
    const loggerMail = {
      from: `"Rohit Mittal" <${process.env.SMTP_USER}>`,
      to: "rohitmittal137@gmail.com",
      subject: `New Message From Portfolio`,
      html: `
    <p>User :  ${firstName} ${lastName},</p>
    <p>Email : ${email} , phone :${mobile} </p>
    <p> Service : ${service} </p>
    <a href="https://wa.me/${mobile}" style="color: #7947df; text-decoration: none;">Whatsapp</a>
    
    <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #7947df;">
      <p><strong> Message:</strong> ${message}</p>
    </blockquote>
  `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(loggerMail);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
