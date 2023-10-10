import React from "react";

export default function Heading(props: HeadingProps) {
  const baseStyles: string = "text-2xl mt-8 text-center";
  return <div className={`${baseStyles} ${props.css}`}>{props.children}</div>;
}

type HeadingProps = {
  children: React.ReactNode;
  css: string;
};
