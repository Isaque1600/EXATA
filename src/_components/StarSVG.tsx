type Props = { className?: string };

export default function StarSVG({ className }: Props) {
  return (
    <div className={className}>
      <svg
        width="1709"
        height="1710"
        viewBox="0 0 1709 1710"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_58_8)">
          <path
            d="M554.721 278.434C582.917 -91.9969 1126.08 -91.9969 1154.28 278.434V278.434C1165.55 426.437 1283.17 544.056 1431.17 555.314V555.314C1801.51 583.485 1801.51 1126.52 1431.17 1154.69V1154.69C1283.17 1165.95 1165.55 1283.57 1154.28 1431.57V1431.57C1126.08 1802 582.917 1802 554.722 1431.57V1431.57C543.456 1283.57 425.834 1165.95 277.832 1154.69V1154.69C-92.5104 1126.52 -92.5105 583.485 277.831 555.315V555.315C425.834 544.057 543.456 426.437 554.721 278.434V278.434Z"
            fill="url(#paint0_linear_58_8)"
            fill-opacity="0.7"
          />
          <path
            d="M278.173 559.802C428.392 548.375 547.774 428.994 559.208 278.776C586.982 -86.1109 1122.02 -86.1107 1149.79 278.776C1161.23 428.994 1280.61 548.375 1430.83 559.801C1795.63 587.55 1795.63 1122.45 1430.83 1150.2C1280.61 1161.63 1161.23 1281.01 1149.79 1431.23C1122.02 1796.11 586.982 1796.11 559.208 1431.23C547.774 1281.01 428.392 1161.63 278.173 1150.2C-86.6242 1122.45 -86.6243 587.55 278.173 559.802Z"
            stroke="url(#paint1_linear_58_8)"
            stroke-opacity="0.6"
            stroke-width="9"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_58_8"
            x="-119.925"
            y="-119.389"
            width="1948.85"
            height="1948.78"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="60" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_58_8"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_58_8"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_58_8"
            x1="854"
            y1="59.0009"
            x2="854.001"
            y2="1835.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.473671" stop-color="#1372ED" />
            <stop offset="1" stop-color="#04D2FF" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_58_8"
            x1="1125"
            y1="93.5015"
            x2="1511"
            y2="1214"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#475569" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
