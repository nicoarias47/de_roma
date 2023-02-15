export const EmailIcon = ({ stroke, classname }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <path
        d="M5 8H29V25C29 25.2652 28.8946 25.5196 28.7071 25.7071C28.5196 25.8946 28.2652 26 28 26H6C5.73478 26 5.48043 25.8946 5.29289 25.7071C5.10536 25.5196 5 25.2652 5 25V8Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 8L17 19L5 8"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
