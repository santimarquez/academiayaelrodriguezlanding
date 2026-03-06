import "dotenv/config";
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { escapeHtml } from "../../utils/escapeHtml";

export const prerender = false;

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "santymaro@gmail.com";

function getTransporter() {
  const host = process.env.MAIL_HOST;
  const port = Number(process.env.MAIL_PORT) || 587;
  const user = process.env.MAIL_USERNAME;
  const pass = process.env.MAIL_PASSWORD;
  const secure = process.env.MAIL_ENCRYPTION === "ssl";

  if (!host || !user || !pass) {
    throw new Error("Missing MAIL_HOST, MAIL_USERNAME or MAIL_PASSWORD");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: true },
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("content-type") !== "application/json") {
    return new Response(
      JSON.stringify({ error: "Content-Type must be application/json" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  let body: { name?: string; email?: string; phone?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const phone = String(body?.phone ?? "").trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !phone) {
    return new Response(
      JSON.stringify({
        error: "Nombre, email y teléfono son obligatorios",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: "Introduce un email válido" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const fromAddress =
    process.env.MAIL_FROM_ADDRESS || "noreply@academia-yaelrodriguez.es";
  const fromName =
    process.env.MAIL_FROM_NAME || "Academia Yael Rodríguez";

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: CONTACT_EMAIL,
      subject: `[Academia Yael] Solicitud de información - ${name}`,
      text: `Nombre completo: ${name}\nEmail: ${email}\nTeléfono: ${phone}`,
      html: `<p><strong>Nombre completo:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>`,
    });
  } catch (err) {
    console.error("Contact form send error:", err);
    return new Response(
      JSON.stringify({
        error: "No se pudo enviar. Por favor, inténtalo más tarde.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
