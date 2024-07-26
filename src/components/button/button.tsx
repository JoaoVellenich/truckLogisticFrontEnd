import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-3xl flex justify-center items-center gap-2 px-2",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "bg-red-400 hover:bg-red-500",
    },
    size: {
      big: "h-14 w-full",
      medium: "h-10 w-full",
      small: "py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "big",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
}
