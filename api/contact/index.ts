import { Context, HttpRequest } from "@azure/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function (context: Context, req: HttpRequest): Promise<void> {
  try {
    // 🌟 EXTRACT ALL FRONTEND FIELDS
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      context.res = {
        status: 400,
        body: { error: "All fields (name, email, subject, message) are required." }
      };
      return;
    }

    // 🌟 DISPATCH VIA THE RESEND SDK
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Upgrade to your verified domain later (e.g., hello@vishalsharaf.com)
      to: ["vishalsharaf99@gmail.com"], // Your destination mailbox
      replyTo: email, // Clicking "Reply" in your inbox goes straight back to the sender
      
      // 🌟 DYNAMIC SUBJECT LINE
      subject: `💼 Portfolio [${subject}]: Message from ${name}`,
      
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #334155; line-height: 1.6;">
          <h2 style="color: #0284c7; border-b: 1px solid #e2e8f0; padding-bottom: 10px;">New Contact Submission</h2>
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Stated Subject:</strong> ${subject}</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 15px;">
            <p style="margin-top: 0; font-weight: bold; color: #1e293b;">Message Details:</p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    context.res = {
      status: 200,
      body: { success: true, id: data.data?.id }
    };
  } catch (error: any) {
    context.res = {
      status: 500,
      body: { error: error.message || "Internal Server Error" }
    };
  }
}
