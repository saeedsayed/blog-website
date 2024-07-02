import Link from "next/link";
import React from "react";

const Button = ({ variant, href, children, ...props }) => {
  const bg =
    variant == "primary"
      ? "bg-btn"
      : variant == "white"
      ? "bg-white !text-black font-semibold"
      : variant == "danger" && "bg-red-800";
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`${bg} w-full flex items-center justify-center rounded-xl text-white px-4 py-2`}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button className={`${bg} w-full flex items-center justify-center rounded-xl text-white px-4 py-2`} {...props}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
