
// Custom health-related icons
import { SVGProps } from "react";

export const DietIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-diet"
      {...props}
    >
      <path d="M6.5 3.5c0 1-2 1.5-2 1.5s-2-.5-2-1.5S3.5 2 4.5 2s2 .5 2 1.5z" />
      <path d="M6.5 8.5c0 1-2 1.5-2 1.5s-2-.5-2-1.5S3.5 7 4.5 7s2 .5 2 1.5z" />
      <path d="M7 14c-1-.3-2-.3-3 0-3 1-4-1-4-1 1 4 5 6 8 6s7-2 8-6c0 0-1 2-4 1-1-.3-2-.3-3 0" />
      <path d="m19 3-3 2.5" />
      <path d="m19 8-3-2.5" />
      <path d="M22 6h-9" />
    </svg>
  );
};

export const CaloriesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-calories"
      {...props}
    >
      <path d="M2 12h20" />
      <path d="M18 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4" />
      <path d="M6 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4" />
      <path d="M12 11a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1" />
    </svg>
  );
};

export const BMIIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-bmi"
      {...props}
    >
      <path d="m12 5 1.5-1.5a3.54 3.54 0 0 1 5 5L12 15" />
      <path d="M5.5 15H4c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h3l3-3" />
      <path d="m13 5 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5" />
      <path d="M8 10h2a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2v4" />
      <path d="M7 4v1" />
      <path d="M7 10v4" />
      <path d="m12 19 5-5" />
      <path d="M16 19h.01" />
      <path d="M13 16h.01" />
      <path d="M3 3v18h18" />
    </svg>
  );
};

export const InfoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
};
