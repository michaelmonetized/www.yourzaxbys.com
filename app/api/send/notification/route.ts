import { NotificationEmail } from "@/components/emails/notification";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { contact } = await request.json();
  const notifyEmail = await NotificationEmail({ contact: contact });

  try {
    const { data, error } = await resend.emails.send({
      from: "Notifications <notify@uncap.us>",
      to: ["michaelmonetized@gmail.com", "8285931935@vtext.com"],
      subject: `New Contact ${contact.name}`,
      react: notifyEmail,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
