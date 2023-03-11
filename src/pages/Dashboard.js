import { AiFillExclamationCircle } from "react-icons/ai";
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
  return (
    <>
      <section className="flex flex-col gap-6 my-8 mx-12">
        {/* welcome message section */}
        <section>
          <span className="font-bold">Adel Ghaeinian</span>
          <span className="ml-2 font-thin">Welcome Back!</span>
        </section>
        {/* premium section */}
        <section className="flex sm:flex-col items-center gap-4">
          <p className="py-1 px-8 text-[#FFC225] bg-[#423922] rounded-3xl">PREMIUM</p>
          <section className="flex items-center justify-center gap-1">
            <span>28</span>
            <span>Day Remaining</span>
            <span className="mt-1 text-[18px]">
              <AiFillExclamationCircle />
            </span>
          </section>
        </section>
        {/* filter bar section */}
        <section className="flex justify-between items-center w-full bg-[#1A1F2D] px-10 rounded-lg overflow-hidden">
          <FilterBar items={filterItems} output={(item) => console.log(item)} />
          <p>more pairs soon!</p>
        </section>
        <section className="flex flex-wrap justify-around items-center w-full h-[25rem] bg-[#1A1F2D] p-5 rounded-lg">
          {/* market section */}
          <section className="flex justify-center items-center relative w-[30rem] h-full rounded-lg">
            <img className="absolute left-0 top-0 w-full h-full blur-sm border border-[#141928d1]" src={chartBg} alt="chart" />
            <button className="relative py-4 px-10 bg-[#141928d1] border border-[#1b2646d1] rounded-md z-10 before:absolute before:top-[-5px] before:right-[-5px] before:w-4 before:h-4 before:bg-green-600 before:rounded-full">
              View Market
            </button>
          </section>
          {/* analysis section */}
          <section className="h-full">
            <AnalysisBox data={analysisData} />
          </section>
          <section className="h-full">
            <UpgradeBox name="M15" />
          </section>
        </section>
        {/* Latest Posts section */}
        <section className="flex flex-col gap-4 w-full bg-[#1A1F2D] p-5 rounded-lg">
          <h6>Latest Posts</h6>
          <section className="flex justify-around items-center gap-4 w-full overflow-x-auto">
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
