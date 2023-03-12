const UpgradeBox = ({ name }) => {
  return (
    <>
      <section className="flex flex-col w-[20rem] sm:w-[18rem] h-full rounded-lg bg-[#131722] p-4">
        {/* box header */}
        <section className="h-[1rem]">
          <h5>
            <span className="text-white">{name}</span> Analysis
          </h5>
        </section>
        <section className="flex flex-col justify-center items-center h-full gap-3">
          <p className="text-center">Upgrade Your Plan To See Lower Timeframes</p>
          <button className="uppercase text-[#0690BD] rounded-3xl border border-[#0690BD] py-1 px-5">UPGRADE</button>
        </section>
      </section>
    </>
  );
};

export default UpgradeBox;
