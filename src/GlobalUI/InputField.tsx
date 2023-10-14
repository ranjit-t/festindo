import React from "react";

export default function InputField({
  text,
  type,
  value,
  setValue,
  required,
  placeholder,
  disabled,
  css,
}: InputFieldProps) {
  return (
    <div>
      <label>
        {text}
        <input
          type={type}
          className={`border border-1 border-gray-400 my-2 px-4 py-2 outline-none rounded-lg block max-w-[300px] w-[90vw] ${css}`}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          required={required ? required : true}
          placeholder={placeholder}
          disabled={disabled}
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
  disabled?: boolean;
  css?: string;
};
