import clsx from "clsx";

const ScoreCard = ({ score, name, bgGreen, bgRed, className }) => {
  return (
    <>
      <section
        className={clsx(
          "w-[8.5rem] h-[3rem] flex flex-col justify-center items-center bg-[#171B25] rounded-sm",
          bgGreen && "bg-[#0F3E3F] text-green-500",
          bgRed && "bg-[#56202D] text-red-600",
          className && className
        )}
      >
        {score && <span className={clsx(bgGreen && "text-green-500", bgRed && "text-red-600")}>{score}</span>}
        {name && <span>{name}</span>}
      </section>
    </>
  );
};

export default ScoreCard;
