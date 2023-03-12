import { useMenuUpdate } from "../context/MenuContext";
import exclamationIcon from "../assets/image/icons/exclamation-circle.svg";
import menuIcon from "../assets/image/icons/menu/menu.svg";
import FilterBar from "./../components/FilterBar";
import AnalysisBox from "./../components/utils/AnalysisBox";
import chartBg from "../assets/image/chart.jpg";
import UpgradeBox from "../components/utils/UpgradeBox";
import Post from "../components/utils/Post";

const filterItems = [
  { id: 0, text: "EUR/USD" },
  { id: 1, text: "BTC/USD" },
  { id: 2, text: "S&P500/USD" },
  { id: 3, text: "XAU/USD" },
];

const analysisData = {
  name: "H4",
  date: "13Sep2023",
  time: "20:43 PM",
  scoreData: [
    { id: 0, name: "Momentum", score: "A+" },
    { id: 1, name: "Slapbet", score: "+1" },
    { id: 2, name: "SOS", score: "-2" },
    { id: 3, name: "Stop Hunt", score: "+1" },
    { id: 4, name: "", score: "" },
    { id: 5, name: "Pattern Score", score: "+36" },
    { id: 6, name: "Cumm. Score", score: "+3" },
  ],
};

const Dashboard = () => {
  const openMenu = useMenuUpdate();
  return (
    <>
      <section className="h-[90vh] flex flex-col gap-6 my-8 mx-12 sm:mx-4 overflow-auto scrollbar-hide">
        {/* welcome message section */}
        <section className="flex justify-between items-center">
          <section>
            <span className="font-bold">Adel Ghaeinian</span>
            <span className="ml-2 font-thin">Welcome Back!</span>
          </section>
          <section>
            <img className="hidden sm:block" src={menuIcon} alt="" onClick={openMenu} />
          </section>
        </section>
        {/* premium section */}
        <section className="flex sm:flex-col items-center gap-4">
          <p className="py-1 px-8 text-[#FFC225] bg-[#423922] rounded-3xl">PREMIUM</p>
          <section className="flex items-center justify-center gap-1">
            <span>28</span>
            <span>Day Remaining</span>
            <span className="mt-1 text-[18px] w-4">
              <img src={exclamationIcon} alt="" />
            </span>
          </section>
        </section>
        {/* filter bar section */}
        <section className="flex md:flex-col-reverse justify-between items-center w-full bg-[#1A1F2D] px-10 rounded-lg">
          <FilterBar items={filterItems} output={(item) => console.log(item)} />
          <p className="sm:pt-2">more pairs soon!</p>
        </section>
        <section className="flex flex-wrap justify-center items-center gap-4 w-full h-[max-content] bg-[#1A1F2D] p-5 py-7 rounded-lg">
          {/* market section */}
          <section className="flex justify-center items-center relative w-[35rem] sm:w-[15rem] h-[23rem] sm:h-[12rem] rounded-lg">
            <img className="absolute left-0 top-0 w-full h-full blur-sm border border-[#141928d1] rounded-lg" src={chartBg} alt="chart" />
            <button className="relative py-4 px-10 bg-[#141928d1] border border-[#1b2646d1] rounded-md z-10 before:absolute before:top-[-5px] before:right-[-5px] before:w-4 before:h-4 before:bg-green-600 before:rounded-full">
              View Market
            </button>
          </section>
          {/* analysis section */}
          <section className="h-[23rem] sm:h-[max-content]">
            <AnalysisBox data={analysisData} />
          </section>
          <section className="h-[23rem]">
            <UpgradeBox name="M15" />
          </section>
        </section>
        {/* Latest Posts section */}
        <section className="flex flex-col gap-4 w-full bg-[#1A1F2D] p-5 rounded-lg mb-20 sm:mb-32">
          <h6>Latest Posts</h6>
          <section className="flex gap-4 overflow-x-auto scrollbar-hide">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </section>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
