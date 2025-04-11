"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple client-side validation
  if (!validateString(senderName, 100)) {
    return {
      error: "Invalid sender name",
    };
  }

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Website Contact Form <onboarding@resend.dev>",
      to: "marwanbddev@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderName: senderName,
        senderEmail: senderEmail,
        message: message,
      }),
    });
  } catch (error: unknown) {
    // console.error(error);
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};