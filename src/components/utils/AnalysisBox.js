import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import ScoreCard from "./ScoreCard";

const AnalysisBox = ({ data }) => {
  const { name, date, time, scoreData } = data;
  return (
    <>
      <section className="flex flex-col justify-center items-center w-[20rem] h-full rounded-lg bg-[#131722] p-4">
        {/* box header */}
        <section className="w-full flex justify-between items-center">
          <h5>
            <span className="text-white">{name}</span> Analysis
          </h5>
          <span>
            <BsFileEarmarkArrowDownFill />
          </span>
        </section>
        <section className="w-full flex justify-between items-center mt-3">
          <p>
            <span>{date}</span>
            <span className="text-[#f1f1f1] pl-2">{time}</span>
          </p>
          <section className="flex gap-2">
            <IoIosArrowDropleft className="text-[20px]" />
            <IoIosArrowDropright className="text-[20px]" />
          </section>
        </section>
        <section className="w-full flex justify-center items-center flex-wrap gap-2 mt-3">
          {scoreData?.map((item, index) => {
            const { id, name, score } = item;
            return (
              <ScoreCard
                key={id}
                className={index === 0 && "!w-full !bg-[#0759458f]"}
                name={name}
                score={score}
                bgGreen={score.includes("+")}
                bgRed={score.includes("-")}
              />
            );
          })}
        </section>
        <section className="w-full">
          <section className="relative w-full h-1 rounded-lg bg-gray-600 mt-4 before:absolute before:left-0 before:w-[80%] before:h-1 before:bg-[#008665eb] before:rounded-xl"></section>
          <section className="w-full flex justify-between mt-1">
            <span>Short</span>
            <span>Neutral</span>
            <span>Long</span>
          </section>
        </section>
      </section>
    </>
  );
};

export default AnalysisBox;
