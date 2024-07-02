"use client";
import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Input = ({ textarea, label, id, type, ...props }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <>
      {!!label && (
        <label className="text-lg" htmlFor={id}>
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          className="border resize-y text-lg border-none focus:outline-none bg-midnight px-4 py-2 rounded"
          {...props}
        />
      ) : (
        <div className="relative">
          <input
            className="border w-full text-lg border-none focus:outline-none bg-midnight px-4 py-2 rounded"
            id={id}
            type={type === "password" && isShowPassword ? "text" : type}
            {...props}
          />
          {type === "password" && (
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-400"
              onClick={() => setIsShowPassword(!isShowPassword)}
              type="button"
            >
              {isShowPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Input;
