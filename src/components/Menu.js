import { HiArrowRightOnRectangle, HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoMdAnalytics } from "react-icons/io";
import Avatar from "./utils/Avatar";
import MenuItem from "./utils/MenuItem";

const Menu = () => {
  return (
    <>
      <section className="absolute flex flex-col justify-between left-0 h-full w-[6rem] bg-[#1A1F2D] z-10">
        <section className="mt-2">
          <Avatar name="Account" />
        </section>
        <section className="flex flex-col gap-4">
          <MenuItem
            text="Dashboard"
            icon={<HiOutlineSquares2X2 />}
            className="relative before:absolute before:left-[-2px] before:h-full before:w-1 before:rounded-lg before:mr-2 before:bg-[#00C2FF] text-[#00C2FF]"
          />
          <MenuItem text="Markets" icon={<IoMdAnalytics />} />
          <MenuItem text="Markets" icon={<IoMdAnalytics />} />
        </section>
        <section className="w-full h-[6rem] flex justify-center items-center border-t border-[#2A2F3C]">
          <span className="text-[30px] cursor-pointer">
            <HiArrowRightOnRectangle />
          </span>
        </section>
      </section>
    </>
  );
};

export default Menu;
