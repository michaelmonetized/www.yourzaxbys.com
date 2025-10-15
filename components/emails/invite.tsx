import { EmployeeProps } from "@/lib/employee";
import * as React from "react";

type InviteEmailProps = Pick<EmployeeProps, "first" | "email" | "eid">;

export const InviteEmail: React.FC<Readonly<InviteEmailProps>> = ({
  first,
  email,
  eid,
}) => {
  const queryString = new URLSearchParams({
    key: Buffer.from(JSON.stringify({ email, eid })).toString("base64"),
  }).toString();
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/onboarding?${queryString}`;
  return (
    <div>
      <h1>Welcome to the team {first}!</h1>
      <p>Your employee ID is {eid}.</p>
      <p>Please use this ID to login to the employee portal.</p>
      <a href={url}>Login to the employee portal</a>
    </div>
  );
};
