import React from "react";

type ButtonProps = {
  label: string;
  color: string;
  hoverColor: string;
};

export const Button = ({ label, color, hoverColor }: ButtonProps) => {
  return (
    <button
      className={`mt-2 rounded bg-${color} px-2 py-1 text-sm text-white hover:bg-${hoverColor}`}
    >
      {label}
    </button>
  );
};
