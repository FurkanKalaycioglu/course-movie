import React from "react";
import cn from "classnames";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "icon";
}
function Button({ children, onClick, variant }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex flex-row py-3 rounded-3xl justify-center items-center gap-4 text-grayscale-10 text-base font-semibold",
        {
          "bg-linedark": variant === "icon",
          "bg-primary": variant === "primary",
        },
      )}
    >
      {children}
    </button>
  );
}

export default Button;
