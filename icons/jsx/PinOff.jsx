import * as React from "react";
function SvgPinOff(props) {
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
        d="M9 9l7 7h-3v4l-1 3-1-3v-4H6v-3l3-3V9zm8-7v2l-2 1v5l3 3v2.461L12.27 9.73 9 6.46V5L7 4V2h10z"
        fill="currentColor"
      />
      <path
        d="M2.27 2.27L1 3.54 20.46 23l1.27-1.27L11 11z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgPinOff;
