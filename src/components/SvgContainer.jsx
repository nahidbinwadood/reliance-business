import { PropTypes } from 'prop-types';
export function DownArrowSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
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
ButtonUpArrowSvg.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};
