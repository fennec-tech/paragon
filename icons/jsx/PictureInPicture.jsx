import * as React from "react";
function SvgPictureInPicture(props) {
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
        d="M19 7h-8v6h8V7zm4-4H1v17.98h22V3zm-2 16.01H3V4.98h18v14.03z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgPictureInPicture;
