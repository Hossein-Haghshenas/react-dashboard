import Menu from "../Menu";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <section className="absolute left-[5rem] w-[90%] h-full overflow-auto scrollbar-hide">{children}</section>
      <Menu />
      <Footer />
    </>
  );
};

export default Layout;
