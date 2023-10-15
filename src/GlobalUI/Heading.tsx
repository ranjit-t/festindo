import React from "react";

export default function Heading(props: HeadingProps) {
  const baseStyles: string = "text-2xl text-center";
  return <div className={`${props.css} ${baseStyles} `}>{props.children}</div>;
}

type HeadingProps = {
  children: React.ReactNode;
  css: string;
};
