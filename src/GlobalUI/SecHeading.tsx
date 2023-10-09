import React from "react";

export default function SecHeading(props: SecHeadingProps) {
  const baseStyles: string = "text-xl";
  return <div className={`${baseStyles} ${props.css}`}>{props.children}</div>;
}

type SecHeadingProps = {
  children: React.ReactNode;
  css: string;
};
