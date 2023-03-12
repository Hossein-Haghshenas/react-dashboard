const Avatar = ({ name }) => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <span className="flex justify-center items-center rounded-full w-[4rem] sm:w-[2rem] h-[4rem] sm:h-[2rem] text-[30px] sm:text-[15px] font-semibold bg-[#414141] uppercase">
          {name[0]}
        </span>
        <p>{name}</p>
      </section>
    </>
  );
};

export default Avatar;
