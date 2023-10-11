import React from "react";

export default function InputField({
  text,
  type,
  value,
  setValue,
  required,
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label>
        {text}
        <input
          type={type}
          className="border border-1 border-black px-4 py-2 outline-none rounded-lg block max-w-[300px] w-[90vw]"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          required={required ? required : true}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

type InputFieldProps = {
  text: string;
  type: string;
  value: any;
  setValue: React.Dispatch<any>;
  required?: boolean;
  placeholder: string;
};
