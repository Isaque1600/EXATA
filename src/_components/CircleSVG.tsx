type Props = {
  className?: string;
};

export default function CircleSVG({ className }: Props) {
  return (
    <div className={className}>
      <svg
        width="544"
        height="544"
        viewBox="0 0 544 544"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="272" cy="272" r="272" fill="url(#paint0_linear_61_10)" />
        <defs>
          <linearGradient
            id="paint0_linear_61_10"
            x1="544"
            y1="272"
            x2="6.10352e-05"
            y2="272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D9D9D9" stop-opacity="0.2" />
            <stop offset="1" stop-color="#14427D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
