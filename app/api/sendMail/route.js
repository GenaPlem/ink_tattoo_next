import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

export async function POST(req) {
  try {
    const { name, number, email, description } = await req.json();

    if (!name || !number || !email || !description) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }

    const msg = {
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: "Ink Tattoo request",
      text: `
        Name: ${name}
        Phone number: ${number}
        Email: ${email}
        Description: ${description}
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: "Mail successfully sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
