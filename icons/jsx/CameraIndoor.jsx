import * as React from "react";
function SvgCameraIndoor(props) {
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
        d="M12 3L4 9v12h16V9l-8-6zm4 13.06L14 15v2H8v-6h6v2l2-1.06v4.12z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgCameraIndoor;
