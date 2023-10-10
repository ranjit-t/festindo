import React from "react";

export default function SubmitButton({ text }: { text: string }) {
  return (
    <>
      <button className="bg-black text-white px-4 py-2 rounded-md">
        {text}
      </button>
    </>
  );
}
