import clsx from "clsx";

const ScoreCard = ({ score, name, bgGreen, bgRed, className }) => {
  return (
    <>
      <section
        className={clsx(
          "w-[8.75rem] sm:w-full h-[3rem] flex flex-col justify-center items-center bg-[#171B25] rounded-lg",
          bgGreen && "bg-[#07594533]",
          bgRed && "bg-[#56202D]",
          className && className
        )}
      >
        {score && <span className={clsx(bgGreen && "text-[#00ffc185]", bgRed && "text-red-600")}>{score}</span>}
        {name && <span>{name}</span>}
      </section>
    </>
  );
};

export default ScoreCard;
