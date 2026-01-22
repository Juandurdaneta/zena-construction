import { NextResponse } from "next/server";

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

    // Send to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Property Evaluation Request from ${name}`,
        from_name: "Zena Construction Website",
        name,
        email,
        phone,
        address: address || "Not provided",
        project_type: projectType || propertyType || "Not specified",
        message: propertyDescription || message || "No additional details provided",
      }),
    });

    const result = await response.json();

    if (!result.success) {
      console.error("Web3Forms error:", result);
      return NextResponse.json(
        { error: "Failed to send email", details: result.message },
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
