import { Link } from "react-router";

import insuranceLogo from "../assets/insurance-icon.svg";
import emailLogo from "../assets/email.svg";
import meetupLogo from "../assets/meetup.svg";
import paperPlaneLogo from "../assets/paper-plane.svg";
import phoneComputerLogo from "../assets/phone-computer.svg";
import LTO_logo from "../assets/LTO.svg";
import heroBG from "../assets/hero-img.webp";
import carLogo from "../assets/car-logo.webp";
import motorcycleLogo from "../assets/motorcycle-logo.webp";
import { getPrices } from "../utility/getPrices";
import { useEffect, useState } from "react";

const Home = () => {
  const [prices, setPrices] = useState({ motorPrice: "---", carPrice: "---" });

  const classes = {
    li: "flex h-70 w-3xs flex-col items-center justify-center rounded-3xl border-2 border-(--accent)/70 bg-neutral-950 p-2 text-center shadow-sm shadow-black md:w-[17rem] lg:w-[19rem] md:h-[19.5rem] lg:h-[21.5rem]",
  };

  useEffect(() => {
    getPrices().then((data) => {
      if (data === null) return;
      setPrices(data);
    });
  }, []);

  return (
    <>
      <header className="absolute top-2 left-0 flex w-full flex-wrap items-center justify-between gap-1">
        <div className="ml-4 flex items-center gap-2">
          <img className="w-12" src={insuranceLogo} alt="logo" />
          <h2 className="text-4xl font-black text-amber-500">Golden Ore</h2>
        </div>
        <div className="mr-4 ml-4 flex items-center gap-1 opacity-70">
          <img className="w-10" src={LTO_logo} alt="" />
          <p className="responsive-text-xs font-semibold text-blue-500">
            Accredited by LTO
          </p>
        </div>
      </header>

      <section className="relative flex min-h-dvh items-center justify-center">
        <div className="hero-bg-fadeout-shadow absolute -z-20 size-full">
          <img
            src={heroBG}
            alt=""
            className="size-full object-cover brightness-[20%]"
          />
        </div>

        <div className="mt-12 p-4 md:mt-0">
          <h1 className="text-shadow responsive-text-5xl text text-center font-black text-white/95">
            Get Your Vehicle Insured!
          </h1>

          <p className="responsive-text-base mx-auto mt-5 max-w-3xl text-center text-white/80">
            with&nbsp;
            <span className="responsive-text-xl font-bold text-(--accent)">
              Golden Ore Insurance
            </span>
            &nbsp;----your vehicle repair backup on accidents, securing your car
            and motorcycle. cheap, easy, and fast.
          </p>

          <div className="container mt-5">
            <Link to="/application">
              <button className="responsive-text-2xl cursor-pointer rounded-lg border-1 border-black bg-(--accent)/80 px-5 py-1 font-semibold text-white/95 shadow-md shadow-black">
                Inquire Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-4 text-white/95">
        {/* Prices*/}
        <h2 className="responsive-text-5xl pt-10 text-center font-bold">
          Prices
        </h2>

        <div className="relative mx-auto mt-12 max-w-[26rem] rounded-3xl border-2 border-(--accent)/70 bg-neutral-950 p-4">
          <img
            className="absolute -top-1 left-0 w-52 object-contain md:w-56 lg:top-0 lg:w-60"
            src={motorcycleLogo}
            alt=""
          />

          <div className="ml-auto w-fit">
            <h3 className="responsive-text-xl text-center font-semibold text-white/80">
              Motorcycle
            </h3>
            <p className="responsive-text-5xl mt-2 text-center font-bold text-(--accent)">
              ₱{prices.motorPrice}
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-6 max-w-[26rem] rounded-3xl border-2 border-(--accent)/70 bg-neutral-950 p-4">
          <img
            className="absolute top-4 left-0 w-36 object-contain md:top-6 md:w-40 lg:w-44"
            src={carLogo}
            alt=""
          />

          <div className="ml-auto w-fit">
            <h3 className="responsive-text-xl text-center font-semibold text-white/80">
              Car
            </h3>
            <p className="responsive-text-5xl mt-2 text-center font-bold text-(--accent)">
              ₱{prices.carPrice}
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1f1f1f] p-8 text-white/95">
        {/* steps/process */}

        <h2 className="responsive-text-5xl pt-10 text-center font-bold">
          Steps
        </h2>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-8 p-4 md:gap-12 lg:gap-16">
          <li className={classes.li}>
            <div className="relative w-full">
              <img
                src={phoneComputerLogo}
                alt=""
                className="mx-auto w-20 opacity-70"
              />
              <img
                src={paperPlaneLogo}
                alt=""
                className="absolute -top-5 right-15 w-12 opacity-70"
              />
            </div>
            <span className="responsive-text-2xl mt-1 font-bold">
              1. You Inquire
            </span>
            <p className="responsive-text-sm mt-1 text-balance text-white/80">
              Fill out the application form and then submit.
            </p>
          </li>

          <li className={classes.li}>
            <img src={emailLogo} alt="" className="w-18 opacity-70" />
            <span className="responsive-text-2xl mt-1 font-bold">
              2. We Process
            </span>
            <p className="responsive-text-sm mt-1 text-white/80">
              We will email you when it's ready and you can pick it up here
            </p>
          </li>

          <li className={classes.li}>
            <img src={meetupLogo} alt="" className="w-22 opacity-70" />
            <span className="responsive-text-2xl mt-1 font-bold">
              3. Take Your Insurance
            </span>
            <p className="responsive-text-sm mt-1 text-white/70">
              We'll give the insurance, and you can proceed to pay.
            </p>
          </li>
        </ul>
      </section>

      <footer className="bg-neutral-950 p-4 text-center text-white/80">
        All rights reserved.
      </footer>
    </>
  );
};

export default Home;
