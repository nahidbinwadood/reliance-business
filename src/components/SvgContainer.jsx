/* eslint-disable react/prop-types */
export function DownArrowSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4 sm:size-6 lg:size-7 2xl:size-8"
      viewBox="0 0 38 38"
      fill="none"
    >
      <path
        d="M34.5887 16.3063L36.4188 18.0901C37.1937 18.8453 37.1937 20.0666 36.4188 20.8139L20.4014 36.4335C19.6265 37.1888 18.3735 37.1888 17.6068 36.4335L1.58118 20.8139C0.806274 20.0586 0.806274 18.8373 1.58118 18.0901L3.41127 16.3063C4.19442 15.543 5.47218 15.5591 6.23884 16.3385L15.7025 26.0204V2.92836C15.7025 1.85973 16.5846 1 17.681 1H20.319C21.4154 1 22.2975 1.85973 22.2975 2.92836V26.0204L31.7612 16.3385C32.5278 15.5511 33.8056 15.535 34.5887 16.3063Z"
        fill="white"
        stroke="#408FED"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function ButtonUpArrowSvg({ variant }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <path
        className={`${
          variant == 'primary'
            ? 'group-hover:fill-white'
            : 'group-hover:fill-#163B77'
        } transition duration-300`}
        d="M0.974003 1.68646L0.974003 0.883522C0.974003 0.543539 1.24888 0.268659 1.58706 0.270467L8.61639 0.268658C8.95637 0.268658 9.23125 0.543538 9.22944 0.881713L9.22944 7.91285C9.22944 8.25284 8.95456 8.52771 8.61639 8.52591L7.81345 8.52591C7.46985 8.52591 7.19316 8.24198 7.2004 7.89838L7.30348 3.64317L2.10608 8.84057C1.86556 9.08109 1.47855 9.08109 1.23803 8.84057L0.65934 8.26188C0.41882 8.02136 0.41882 7.63436 0.65934 7.39384L5.85674 2.19643L1.60153 2.29951C1.25612 2.30856 0.972195 2.03187 0.974003 1.68646Z"
        fill={`${variant == 'primary' ? '#163B77' : 'white'}`}
      />
    </svg>
  );
}
export function LocationSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="size-5 md:size-6 lg:size-7"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      style={{ enableBackground: 'new 0 0 28 28' }}
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M256 0C114.841 0 0 114.841 0 256s114.841 256 256 256 256-114.841 256-256S397.159 0 256 0zm0 488C128.075 488 24 383.925 24 256S128.075 24 256 24s232 104.075 232 232-104.075 232-232 232zm0-386.5c-64.335 0-116.676 52.34-116.676 116.675 0 47.923 57.352 125.555 107.316 187.834a11.998 11.998 0 0 0 18.72 0l1.548-1.929c52.302-65.164 105.768-138.209 105.768-185.905C372.676 153.84 320.335 101.5 256 101.5zm.011 277.787c-30.959-39.027-92.687-120.202-92.687-161.112 0-51.101 41.574-92.675 92.676-92.675s92.676 41.574 92.676 92.675c0 41.846-61.251 121.677-92.665 161.112zM256 147.038c-39.226 0-71.138 31.912-71.138 71.138s31.913 71.138 71.138 71.138 71.138-31.912 71.138-71.138-31.912-71.138-71.138-71.138zm0 118.275c-25.992 0-47.138-21.146-47.138-47.138s21.146-47.138 47.138-47.138 47.138 21.146 47.138 47.138-21.146 47.138-47.138 47.138z"
          fill="white"
          opacity="1"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
}
export function PersonSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="size-5 md:size-6 lg:size-7"
      x="0"
      y="0"
      viewBox="0 0 189.524 189.524"
      style={{ enableBackground: 'new 0 0 28 28' }}
      xmlSpace="preserve"
    >
      <g>
        <path
          fillRule="evenodd"
          d="M170.94 151.134c11.678-15.753 18.584-35.256 18.584-56.372C189.524 42.426 147.097 0 94.762 0 42.426 0 0 42.426 0 94.762c0 52.335 42.426 94.762 94.762 94.762 27.458 0 52.188-11.678 69.496-30.339a95.39 95.39 0 0 0 6.682-8.051zm-5.254-8.991c9.071-13.552 14.361-29.849 14.361-47.381 0-47.102-38.183-85.286-85.286-85.286-47.101 0-85.285 38.184-85.285 85.286 0 17.533 5.29 33.829 14.362 47.381 11.445-17.098 28.909-29.827 49.361-35.155-9.875-6.843-16.342-18.255-16.342-31.179 0-20.934 16.971-37.905 37.905-37.905s37.905 16.971 37.905 37.905c0 12.923-6.468 24.336-16.342 31.178 20.451 5.329 37.916 18.057 49.361 35.156zm-6.104 8.047c-13.299-21.869-37.353-36.476-64.819-36.476-27.467 0-51.522 14.607-64.821 36.477 15.642 18.275 38.878 29.857 64.82 29.857s49.178-11.583 64.82-29.858zm-64.82-45.952c15.701 0 28.429-12.727 28.429-28.429 0-15.701-12.727-28.429-28.429-28.429S66.333 60.109 66.333 75.81s12.728 28.428 28.429 28.428z"
          clipRule="evenodd"
          fill="white"
          opacity="1"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
}
export function ClockSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="size-5 md:size-6 lg:size-7"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      style={{ enableBackground: 'new 0 0 512 512' }}
      xmlSpace="preserve"
    >
      <g>
        <path
          d="m347.216 301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966 0-19.83 8.864-19.83 19.83v118.978c0 6.246 2.935 12.136 7.932 15.864l79.318 59.489a19.713 19.713 0 0 0 11.878 3.966c6.048 0 11.997-2.717 15.884-7.952 6.585-8.746 4.8-21.179-3.965-27.743z"
          fill="white"
          opacity="1"
          data-original="#000000"
        ></path>
        <path
          d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.833 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.066-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.066 216.341 216.341S375.275 472.341 256 472.341z"
          fill="white"
          opacity="1"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
}
export function CheckSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="size-5 md:size-6 lg:size-7"
      x="0"
      y="0"
      viewBox="0 0 682.667 682.667"
      style={{ enableBackground: 'new 0 0 512 512' }}
      xmlSpace="preserve"
    >
      <g>
        <defs>
          <clipPath id="b" clipPathUnits="userSpaceOnUse">
            <path
              d="M0 512h512V0H0Z"
              fill="white"
              opacity="1"
              data-original="#000000"
            ></path>
          </clipPath>
        </defs>
        <mask id="a">
          <rect
            width="100%"
            height="100%"
            fill="white"
            opacity="1"
            data-original="#ffffff"
          ></rect>
        </mask>
        <g mask="url(#a)">
          <path
            d="m0 0-134.174-134.174-63.873 63.872"
            style={{
              strokeWidth: '40',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: '10',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            transform="matrix(1.33333 0 0 -1.33333 473.365 251.884)"
            fill="none"
            stroke="white"
            strokeWidth="40"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeDasharray="none"
            strokeOpacity=""
            data-original="#000000"
          ></path>
          <g
            clipPath="url(#b)"
            transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
          >
            <path
              d="M0 0c0-130.339-105.661-236-236-236S-472-130.339-472 0s105.661 236 236 236S0 130.339 0 0Z"
              style={{
                strokeWidth: '40',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: '10',
                strokeDasharray: 'none',
                strokeOpacity: '1',
              }}
              transform="translate(492 256)"
              fill="none"
              stroke="white"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeDasharray="none"
              strokeOpacity=""
              data-original="#000000"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
export function MapLocationBgSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1400"
      height="343"
      viewBox="0 0 1400 343"
      fill="none"
    >
      <g filter="url(#filter0_d_25_193)">
        <path
          d="M21 62.7008C21 54.4527 27.6594 47.7521 35.9073 47.7011L172.336 46.8584C178.721 46.8189 184.394 42.7477 186.334 36.665C188.337 30.3875 190.5 23.173 190.5 21.2932C190.5 19.2201 193.832 28.5466 196.55 36.4971C198.645 42.6283 204.379 46.797 210.859 46.8037L1156.02 47.7777C1164.29 47.7863 1171 54.4995 1171 62.7777V308.793C1171 317.078 1164.28 323.793 1156 323.793H36C27.7157 323.793 21 317.078 21 308.793V62.7008Z"
          fill="white"
        />
        <path
          d="M21.75 62.7008C21.75 54.8651 28.0764 48.4995 35.912 48.4511L172.341 47.6084C179.042 47.567 185.007 43.2928 187.049 36.893C188.051 33.7511 189.096 30.3683 189.89 27.5323C190.288 26.1149 190.624 24.8268 190.862 23.7702C190.899 23.6068 190.934 23.4473 190.967 23.2922C191.214 23.8832 191.496 24.5956 191.805 25.4042C192.973 28.457 194.482 32.7653 195.84 36.7397C198.037 43.1691 204.053 47.5467 210.858 47.5537L1156.01 48.5277C1163.88 48.5358 1170.25 54.9134 1170.25 62.7777V308.793C1170.25 316.663 1163.87 323.043 1156 323.043H36C28.1299 323.043 21.75 316.663 21.75 308.793V62.7008Z"
          stroke="#4096FA"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_25_193"
          x="0"
          y="0"
          width="1190"
          height="342.793"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1" dy="-1" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.25098 0 0 0 0 0.588235 0 0 0 0 0.980392 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_25_193"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_25_193"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
