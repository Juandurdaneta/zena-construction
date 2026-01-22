import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  projectType?: string;
  propertyType?: string;
  propertyDescription?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    const { name, email, phone, address, projectType, propertyType, propertyDescription, message } = data;

    // Build the email content
    const emailContent = `
New Contact Form Submission from Zena Construction Website

Contact Information:
--------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
${address ? `Property Address: ${address}` : ""}

Project Details:
----------------
${projectType ? `Project Type: ${projectType}` : ""}
${propertyType ? `Property Type: ${propertyType}` : ""}

Message/Description:
--------------------
${propertyDescription || message || "No additional details provided"}
    `.trim();

    const { error } = await resend.emails.send({
      from: "Zena Construction Website <onboarding@resend.dev>",
      to: "info@zenaconstruction.com",
      replyTo: email,
      subject: `New Property Evaluation Request from ${name}`,
      text: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
