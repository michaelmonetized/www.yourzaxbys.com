import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const boxVariants = cva("flex flex-col w-full px-md", {
  variants: {
    size: {
      full: "max-w-full",
      boxed: "max-w-[195em] w-full",
    },
  },
  defaultVariants: {
    size: "boxed",
  },
});

function Box({
  className,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"section"> &
  VariantProps<typeof boxVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "section";
  return (
    <Comp
      data-slot="box"
      className={cn(boxVariants({ size: "boxed" }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Box, boxVariants };
