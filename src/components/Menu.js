import dashboardIcon from "../assets/image/icons/view-dashboard.svg";
import chartsIcon from "../assets/image/icons/chart-line.svg";
import arrowIcon from "../assets/image/icons/box-arrow-left.svg";
import Avatar from "./utils/Avatar";
import MenuItem from "./utils/MenuItem";

const Menu = () => {
  return (
    <>
      <section className="flex flex-col justify-between h-[100vh] w-[8vw] lg:[12vw] md:w-[16vw] sm:w-[22vw] bg-[#1A1F2D] z-30 overflow-auto scrollbar-hide">
        <section className="mt-2">
          <Avatar name="Account" />
        </section>
        <section className="flex flex-col gap-4">
          <MenuItem
            text="Dashboard"
            icon={<img src={dashboardIcon} alt="" />}
            className="relative before:absolute before:left-[-2px] before:h-full before:w-1 before:rounded-lg before:mr-2 before:bg-[#00C2FF] text-[#00C2FF]"
          />
          <MenuItem text="Markets" icon={<img src={chartsIcon} alt="" />} />
          <MenuItem text="Markets" icon={<img src={chartsIcon} alt="" />} />
          <MenuItem text="Markets" icon={<img src={chartsIcon} alt="" />} />
          <MenuItem text="Markets" icon={<img src={chartsIcon} alt="" />} />
        </section>
        <section className="w-full py-[2rem] flex justify-center items-center border-t border-[#2A2F3C]">
          <span className="cursor-pointer rotate-180 w-10 sm:w-5">
            <img src={arrowIcon} alt="" />
          </span>
        </section>
      </section>
    </>
  );
};

export default Menu;
