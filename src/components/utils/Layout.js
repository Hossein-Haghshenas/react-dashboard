import Menu from "../Menu";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <section className="flex">
      <Menu />
      <section className="w-[92vw] lg:[88vw] md:w-[84vw] sm:w-[78vw] h-[100vh] overflow-hidden">
        <section className="w-full overflow-auto scrollbar-hide">{children}</section>
        <Footer />
      </section>
    </section>
  );
};

export default Layout;
