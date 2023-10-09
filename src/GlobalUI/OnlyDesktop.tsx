import React from "react";

export default function OnlyDesktop({ css, children }: OnlyDesktopProps) {
  const baseStyles: string = "hidden sm:block sm:flex sm:gap-2";
  return <div className={`${baseStyles} ${css}`}>{children}</div>;
}

type OnlyDesktopProps = {
  children: React.ReactNode;
  css: string;
};
