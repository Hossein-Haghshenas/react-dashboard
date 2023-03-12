import youtube from "../assets/image/icons/social/youtube.svg";
import telegram from "../assets/image/icons/social/telegram-plane.svg";
import linkedin from "../assets/image/icons/social/linkedin-in.svg";
import discord from "../assets/image/icons/social/discord.svg";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="absolute bottom-0 left-0 w-full flex sm:flex-col justify-between items-center py-3 px-8 bg-[#161B28] z-20">
        <section></section>
        <section className="flex flex-col justify-center items-center">
          <p>
            {date} <span className="font-bold">Sky Rocket</span>
          </p>
          <p>All Rights Reserved</p>
        </section>
        <section className="flex gap-4 sm:mt-2">
          <a href="/" className="rounded-full bg-[#343946] p-1 w-7">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="/" className="rounded-full bg-[#343946] p-1 w-7">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="/" className="rounded-full bg-[#343946] p-1 w-7">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="/" className="rounded-full bg-[#343946] p-1 w-7">
            <img src={discord} alt="discord" />
          </a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
