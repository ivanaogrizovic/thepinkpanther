import { ReactElement } from "react";
import "./button.scss";

type ButtonProps = {
  theme?: string;
  onClick: () => void;
  children: string;
};

export default function Button({
  theme = "primary",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button className={`pinkpanther-button -${theme}`} onClick={onClick}>
      {children}
    </button>
  );
}
