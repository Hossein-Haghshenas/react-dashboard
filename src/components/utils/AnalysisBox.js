import arrowLeft from "../../assets/image/icons/arrow-alt-circle-left.svg";
import arrowRight from "../../assets/image/icons/arrow-alt-circle-right.svg";
import arrowDown from "../../assets/image/icons/arrow-down-square.svg";
import ScoreCard from "./ScoreCard";

const AnalysisBox = ({ data }) => {
  const { name, date, time, scoreData } = data;
  return (
    <>
      <section className="flex flex-col justify-center items-center w-[20rem] sm:w-[18rem] h-full sm:h-[max-content] rounded-lg bg-[#131722] p-4">
        {/* box header */}
        <section className="w-full flex justify-between items-center">
          <h5>
            <span className="text-white">{name}</span> Analysis
          </h5>
          <span className="w-4">
            <img src={arrowDown} alt="" />
          </span>
        </section>
        <section className="w-full flex justify-between items-center mt-3">
          <p>
            <span>{date}</span>
            <span className="text-[#f1f1f1] pl-2">{time}</span>
          </p>
          <section className="flex gap-2">
            <img className="w-4" src={arrowLeft} alt="" />
            <img className="w-4" src={arrowRight} alt="" />
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
