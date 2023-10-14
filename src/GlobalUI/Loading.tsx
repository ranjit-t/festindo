import React from "react";

export default function Loading() {
  return (
    <div className="text-center">
      <div className="inline-block w-8 h-8 border-t-2 border-gray-900 rounded-full animate-spin"></div>
      <p className="mt-2">Updating...</p>
    </div>
  );
}
