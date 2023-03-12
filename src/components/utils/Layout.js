import Menu from "../Menu";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <section className="relative flex">
      <Menu />
      <section className="w-[92vw] sm:w-full lg:[88vw] md:w-[84vw] h-[100vh] overflow-hidden">
        <section className="w-full overflow-auto scrollbar-hide">{children}</section>
        <Footer />
      </section>
    </section>
  );
};

export default Layout;
