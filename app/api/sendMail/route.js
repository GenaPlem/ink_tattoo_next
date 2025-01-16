import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, number, email, description } = await req.json();
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
