import * as React from "react";
function SvgTv(props) {
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
        d="M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgTv;
