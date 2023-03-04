export const InstagramIcon = ({ stroke, fill, classname }) => {
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
        d="M16.5 22.5C19.2614 22.5 21.5 20.2614 21.5 17.5C21.5 14.7386 19.2614 12.5 16.5 12.5C13.7386 12.5 11.5 14.7386 11.5 17.5C11.5 20.2614 13.7386 22.5 16.5 22.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M22 6H11C7.68629 6 5 8.68629 5 12V23C5 26.3137 7.68629 29 11 29H22C25.3137 29 28 26.3137 28 23V12C28 8.68629 25.3137 6 22 6Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 12.5C23.8284 12.5 24.5 11.8284 24.5 11C24.5 10.1716 23.8284 9.5 23 9.5C22.1716 9.5 21.5 10.1716 21.5 11C21.5 11.8284 22.1716 12.5 23 12.5Z"
        fill={fill}
      />
    </svg>
  );
};
