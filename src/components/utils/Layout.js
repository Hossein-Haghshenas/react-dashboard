import Menu from "../Menu";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <section className="relative w-[100vw] h-[100vh] bg-[#131722] text-[#ffffff75]">
        <section className="absolute left-[5rem]">{children}</section>
        <Menu />
        <Footer />
      </section>
    </>
  );
};

export default Layout;
