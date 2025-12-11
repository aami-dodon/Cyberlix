import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { z } from 'zod';

const subscribeSchema = z.object({
    email: z.string().email(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = subscribeSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address' },
                { status: 400 }
            );
        }

        const { email } = result.data;

        // 1. Store in CSV
        // Ensure data directory exists
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            try {
                fs.mkdirSync(dataDir);
            } catch (err) {
                console.error('Failed to create data directory:', err);
                // Continue globally even if storage fails? Maybe better to error. 
                // But for now let's try to proceed to email sending or error out.
            }
        }

        const filePath = path.join(dataDir, 'subscribers.csv');
        const csvLine = `${new Date().toISOString()},${email}\n`;

        try {
            fs.appendFileSync(filePath, csvLine);
        } catch (err) {
            console.error('Failed to write to CSV:', err);
            // We might still want to email, or fail. Let's fail for now to be safe.
            return NextResponse.json(
                { success: false, message: 'Internal storage error' },
                { status: 500 }
            );
        }

        // 2. Send email via Nodemailer
        // Only attempt if SMTP config is present
        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 587,
                secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || process.env.SMTP_USER,
                subject: "New Newsletter Subscriber",
                text: `New subscriber: ${email}`,
                html: `<p>New subscriber: <strong>${email}</strong></p>`,
            });
        } else {
            console.warn('SMTP credentials not provided, skipping email notification.');
        }

        return NextResponse.json({ success: true, message: 'Subscribed successfully' });
    } catch (error) {
        console.error('Subscribe error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to subscribe' },
            { status: 500 }
        );
    }
}
