import * as React from "react";
function SvgLabel(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M17.03 5L3 5.01v13.98l14.03.01L22 12l-4.97-7z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgLabel;
