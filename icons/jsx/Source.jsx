import * as React from "react";
function SvgSource(props) {
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
        d="M12 6l-2-2H2v16h20V6H12zm2 10H6v-2h8v2zm4-4H6v-2h12v2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default SvgSource;
