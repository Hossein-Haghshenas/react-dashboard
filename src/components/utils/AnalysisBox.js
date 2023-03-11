const AnalysisBox = ({ data }) => {
  const { name } = data;
  return (
    <>
      <section className="flex justify-center items-center w-[20rem] h-full rounded-lg bg-[#131722] p-4">
        {/* box header */}
        <section>
          <h5>
            <span>{name}</span> Analysis
          </h5>
        </section>
      </section>
    </>
  );
};

export default AnalysisBox;
