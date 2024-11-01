type Props = {
  className?: string;
};

export default function LSVG({ className }: Props) {
  return (
    <div className={className}>
      <svg
        width="1589"
        height="1040"
        viewBox="0 0 1589 1040"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_63_12)">
          <path
            d="M5.39024e-05 260.25L9.31334e-05 709L0.00012207 1040L1103 1040L1247.51 1040C1436.11 1040 1589 887.111 1589 698.514C1589 510.453 1436.55 358 1248.49 358L1065.75 358L665.405 358C585.376 358 520.5 293.124 520.5 213.095C520.5 95.4061 425.094 0.000101752 307.405 0.000112041L260.25 0.000116163C116.518 0.000128728 4.13369e-05 116.518 5.39024e-05 260.25Z"
            fill="url(#paint0_linear_63_12)"
            fill-opacity="0.7"
          />
          <path
            d="M5.00009 709L5.00005 260.25C5.00004 119.279 119.279 5.00013 260.25 5.00012L307.405 5.00011C422.333 5.0001 515.5 98.1675 515.5 213.095C515.5 295.885 582.615 363 665.405 363L1065.75 363L1248.49 363C1433.79 363 1584 513.215 1584 698.514C1584 884.35 1433.35 1035 1247.51 1035L1103 1035L5.00012 1035L5.00009 709Z"
            stroke="url(#paint1_linear_63_12)"
            stroke-opacity="0.2"
            stroke-width="10"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_63_12"
            x="-25"
            y="-25"
            width="1639"
            height="1090"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_63_12"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_63_12"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_63_12"
            x1="1437.5"
            y1="714"
            x2="60.5001"
            y2="469"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E7ECFF" stop-opacity="0.3" />
            <stop offset="0.408231" stop-color="#008DFF" stop-opacity="0.5" />
            <stop offset="1" stop-color="#001970" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_63_12"
            x1="1809.5"
            y1="1090"
            x2="538"
            y2="221.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7660FF" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
