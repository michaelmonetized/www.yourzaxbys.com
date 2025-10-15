import { cn } from "@/lib/utils";

export function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn("font-casual text-6xl uppercase", props.className)}
    >
      {props.children}
    </h1>
  );
}

export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={cn("font-condensed text-5xl uppercase", props.className)}
    >
      {props.children}
    </h2>
  );
}

export function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn("font-condensed text-4xl uppercase", props.className)}
    >
      {props.children}
    </h3>
  );
}

export function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      {...props}
      className={cn("font-condensed text-3xl uppercase", props.className)}
    >
      {props.children}
    </h4>
  );
}

export function H5(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      {...props}
      className={cn("font-condensed text-2xl uppercase", props.className)}
    >
      {props.children}
    </h5>
  );
}

export function H6(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6
      {...props}
      className={cn("font-condensed text-xl uppercase", props.className)}
    >
      {props.children}
    </h6>
  );
}

export function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...props} className={cn("font-sans text-lg", props.className)}>
      {props.children}
    </p>
  );
}
