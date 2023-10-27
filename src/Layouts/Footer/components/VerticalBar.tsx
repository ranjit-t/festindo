import React from "react";

export default function VerticalBar({ header, textTags }: VerticalBarProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-lg font-bold mb-2">{header}</h2>
      {textTags.map((tag, idx) => {
        return (
          <a href={tag.value} key={idx} className="text-sm" target="_blank">
            {tag.label}
          </a>
        );
      })}
    </div>
  );
}

type VerticalBarProps = {
  header: string;
  textTags: { label: string; value: string }[];
};
