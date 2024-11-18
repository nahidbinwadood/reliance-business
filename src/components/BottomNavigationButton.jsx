import { DownArrowSvg } from "./SvgContainer";

const BottomNavigationButton = () => {
  return (
    <div className="absolute -bottom-10 size-20 left-52 flex items-center justify-center bg-[#00126F] p-1 border-[6px] border-white cursor-pointer">
      <div className="bg-primary border border-white bg-gradient-to-br from-[#00126F] via-[#00126F] to-[#00126F] shadow-[0px_22.667px_36px_rgba(0,18,111,0.2)] z-20 p-3">
        <DownArrowSvg />
      </div>
    </div>
  );
};

export default BottomNavigationButton;
