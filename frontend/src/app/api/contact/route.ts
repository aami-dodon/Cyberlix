import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    company: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { success: false, message: result.error.issues[0].message },
                { status: 400 }
            );
        }

        const { name, company, email, phone, message } = result.data;

        // Check if SMTP is configured
        if (!process.env.EMAIL_SMTP_HOST || !process.env.EMAIL_SMTP_USER || !process.env.EMAIL_SMTP_PASS) {
            console.error("SMTP credentials missing");
            return NextResponse.json(
                { success: false, message: "Server configuration error: SMTP credentials missing" },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SMTP_HOST,
            port: Number(process.env.EMAIL_SMTP_PORT) || 465,
            secure: process.env.EMAIL_SMTP_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_SMTP_USER,
                pass: process.env.EMAIL_SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM || process.env.EMAIL_SMTP_USER,
            to: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || process.env.EMAIL_SMTP_USER,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Company: ${company || 'N/A'}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
    }
}
