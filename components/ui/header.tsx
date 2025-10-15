import { H1 } from "@/components/fonts/typography";

export default function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="flex items-stretch justify-start gap-md p-md">
        <H1 className="grow">{title}</H1>
      </div>
      <div className="flex items-stretch justify-start gap-md p-md">
        <p className="text-center">{description}</p>
      </div>
    </>
  );
}
