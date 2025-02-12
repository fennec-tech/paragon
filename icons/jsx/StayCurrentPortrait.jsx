import * as React from "react";
function SvgStayCurrentPortrait(props) {
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
        d="M19 1.01L5.01 1v22H19V1.01zM17 19H7V5h10v14z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgStayCurrentPortrait;
