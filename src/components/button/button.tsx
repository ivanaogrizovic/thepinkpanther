import { ReactElement } from "react";
import "./button.scss";

type ButtonProps = {
  theme?: string;
  onClick: () => void;
  children: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
};

export default function Button({
  theme = "primary",
  onClick,
  children,
  type,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`pinkpanther-button -${theme}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
