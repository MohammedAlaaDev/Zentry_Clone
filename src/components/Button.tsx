import { ReactNode } from "react";

const Button = ({
  title,
  className = "bg-yellow-300",
  leftIcon,
  rightIcon,
  id = "",
}: {
  title: string;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  id?: string;
}) => {
  return (
    <button
      id={id}
      className={`font-general flex justify-center items-center gap-4 px-4 py-2 rounded-full text-black text-xs ${className}`}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
};

export default Button;
