import { ComponentProps } from "react";

interface NavBarButtonProps extends ComponentProps<"button"> {
  title: string;
  isActive: boolean;
}

export function NavBarButton({ title, isActive, ...props }: NavBarButtonProps) {
  return (
    <button
      {...props}
      className={`hover:bg-lime-100 rounded-r-3xl px-4 py-2 w-full ${
        isActive ? `bg-lime-400` : ""
      }`}
    >
      <h2 className="text-xl">{title}</h2>
    </button>
  );
}
