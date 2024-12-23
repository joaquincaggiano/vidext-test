interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ArrowLeftSvg = ({
  width = 24,
  height = 24,
  color = "#000000",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M5 12L11 6M5 12L11 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftSvg;
