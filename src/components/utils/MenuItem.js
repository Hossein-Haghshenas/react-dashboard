import clsx from "clsx";

const MenuItem = ({ icon, text, textClassName, route, className, ...rest }) => {
  return (
    <>
      <section className={clsx("flex flex-col justify-center items-center gap-1 cursor-pointer py-4", className && className)} {...rest}>
        {icon && <section className="w-10 sm:w-5">{icon}</section>}
        {text && <section className={clsx("uppercase text-[12px] sm:text[9px] font-semibold", textClassName && textClassName)}>{text}</section>}
      </section>
    </>
  );
};

export default MenuItem;
