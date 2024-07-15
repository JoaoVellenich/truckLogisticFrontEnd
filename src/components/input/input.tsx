import { ComponentProps } from "react";

interface inputProps extends ComponentProps<"input"> {
  placeholder: string;
}

export function Input({ placeholder, ...props }: inputProps) {
  return (
    <input
      className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1 text-center"
      placeholder={placeholder}
      {...props}
    />
  );
}
