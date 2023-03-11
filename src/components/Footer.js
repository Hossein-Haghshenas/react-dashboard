import { AiFillYoutube } from "react-icons/ai";
import { FaTelegramPlane, FaLinkedinIn, FaDiscord } from "react-icons/fa";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="absolute bottom-0 left-0 w-full flex sm:flex-col justify-between items-center py-3 px-8 bg-[#161B28]">
        <section></section>
        <section className="flex flex-col justify-center items-center">
          <p>
            {date} <span className="font-bold">Sky Rocket</span>
          </p>
          <p>All Rights Reserved</p>
        </section>
        <section className="flex gap-4 sm:mt-2">
          <a href="/" className="rounded-full bg-[#343946] p-1">
            <AiFillYoutube />
          </a>
          <a href="/" className="rounded-full bg-[#343946] p-1">
            <FaTelegramPlane />
          </a>
          <a href="/" className="rounded-full bg-[#343946] p-1">
            <FaLinkedinIn />
          </a>
          <a href="/" className="rounded-full bg-[#343946] p-1">
            <FaDiscord />
          </a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
