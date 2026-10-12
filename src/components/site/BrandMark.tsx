type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "h-9 w-9" }: BrandMarkProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
      <path
        d="M22 2.5 39 9v11.4c0 10.5-6.8 17.4-17 21.1C11.8 37.8 5 30.9 5 20.4V9l17-6.5Z"
        fill="#C084FC"
        fillOpacity=".12"
        stroke="#C084FC"
        strokeWidth="1.5"
      />
      <path
        d="m12 29 5.4-14 5.2 14m-8.7-4.5h7m7.1 4.5V15l5.1 7 5-7v14"
        transform="translate(-2 0)"
        stroke="#4DE2FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
