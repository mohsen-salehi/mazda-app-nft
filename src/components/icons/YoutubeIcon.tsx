const YoutubeIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
      >
        <rect
          x="1.55566"
          width="14.3889"
          height="11.2778"
          rx="4"
          fill="url(#paint0_linear_199_7216)"
        />
        <g filter="url(#filter0_bi_199_7216)">
          <rect
            x="17.8887"
            y="1.5556"
            width="12.4444"
            height="17.8889"
            rx="4"
            transform="rotate(90 17.8887 1.5556)"
            fill="#BCE4F1"
            fill-opacity="0.5"
          />
        </g>
        <path
          d="M11.6858 7.29684C12.1789 7.58758 12.1789 8.35696 11.6858 8.6477L8.04392 10.7949C7.57295 11.0726 7.00011 10.7019 7.00011 10.1195L7.00011 5.82505C7.00011 5.24262 7.57295 4.87195 8.04392 5.14963L11.6858 7.29684Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_bi_199_7216"
            x="-4"
            y="-2.4444"
            width="25.8887"
            height="20.4445"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_199_7216"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_199_7216"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.2" dy="0.1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_199_7216"
            />
          </filter>
          <linearGradient
            id="paint0_linear_199_7216"
            x1="2.53118"
            y1="3.44068"
            x2="15.263"
            y2="1.89363"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#44FF33" />
            <stop offset="1" stop-color="#0DA500" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default YoutubeIcon;
