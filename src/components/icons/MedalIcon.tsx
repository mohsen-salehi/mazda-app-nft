const MedalIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.726718 0.729016C-0.24224 1.7012 -0.242239 3.27742 0.726719 4.24961L5.00499 8.54212C5.06172 8.61312 5.12289 8.68173 5.18851 8.74757C6.15747 9.71976 7.72846 9.71975 8.69742 8.74757L13.0836 4.34683C14.0525 3.37465 14.0525 1.79843 13.0836 0.826244C12.1146 -0.14594 10.5436 -0.145939 9.57465 0.826245L6.95359 3.45603L4.23562 0.729016C3.26667 -0.243168 1.69568 -0.243168 0.726718 0.729016Z"
          fill="url(#paint0_linear_199_7206)"
        />
        <g filter="url(#filter0_bi_199_7206)">
          <ellipse
            cx="6.88182"
            cy="9.32525"
            rx="4.65917"
            ry="4.67468"
            fill="#BCE4F1"
            fill-opacity="0.5"
          />
        </g>
        <path
          d="M6.69167 7.14039L6.10188 8.3512L4.76806 8.54238C4.53215 8.5788 4.44141 8.87012 4.61381 9.04309L5.56654 9.98078L5.3397 11.3008C5.30341 11.5375 5.55747 11.7196 5.76616 11.6104L6.9548 10.9822L8.13437 11.6104C8.34306 11.7196 8.59712 11.5375 8.56083 11.3008L8.33399 9.98078L9.28672 9.04309C9.45912 8.87012 9.36838 8.5788 9.13247 8.54238L7.80772 8.3512L7.20886 7.14039C7.10905 6.931 6.80055 6.9219 6.69167 7.14039Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_bi_199_7206"
            x="-1.77734"
            y="0.650574"
            width="17.3184"
            height="17.3494"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_199_7206"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_199_7206"
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
              result="effect2_innerShadow_199_7206"
            />
          </filter>
          <linearGradient
            id="paint0_linear_199_7206"
            x1="0.936284"
            y1="2.89109"
            x2="13.1021"
            y2="1.20262"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFD400" />
            <stop offset="1" stop-color="#FF6700" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default MedalIcon;
