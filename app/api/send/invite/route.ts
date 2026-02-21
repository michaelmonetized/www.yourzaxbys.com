import { InviteEmail } from "@/components/emails/invite";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { first, email, eid } = await request.json();
  const inviteEmail = await InviteEmail({ first, email, eid });

  try {
    const { data, error } = await resend.emails.send({
      from: "Zaxby's Waynesville, NC Restaurant Manager <notify@yourzaxbys.com>",
      to: [email],
      subject: `Welcome to Zaxby's Waynesville, NC Restaurant`,
      react: inviteEmail,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
