import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactHandler(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  try {
    // In v4, parsing json body payloads is asynchronous
    const body: any = await request.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
      return {
        status: 400,
        jsonBody: { error: "All input fields (name, email, subject, message) are mandatory." }
      };
    }

    // Dispatch the email payload safely via Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Upgrade to your verified domain later
      to: ["vishalsharaf99@gmail.com"], // Your destination inbox
      replyTo: email,
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

    return {
      status: 200,
      jsonBody: { success: true, id: data.data?.id }
    };
  } catch (error: any) {
    return {
      status: 500,
      jsonBody: { error: error.message || "Internal Server Error" }
    };
  }
}

// 🌟 THE V4 REGISTRATION ROUTE (Bypasses function.json entirely)
app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: contactHandler,
});
