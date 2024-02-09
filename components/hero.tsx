import React from "react";
import Rating from "../public/star.svg";
import CheckMark from "../public/Checkmark.svg";
import HeroImage from "../public/hero-Illustration.png";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10">
      <div className="md:order-2 md:mr-auto">
        <Image
          src={HeroImage}
          alt="hero image"
          className="w-full h-auto max-w-lg mx-auto"
        />
      </div>

      <div className="flex flex-col gap-5 md:my-auto md:order-1">
        <div className="hidden md:flex gap-3 items-center">
          {Array.from({ length: 5 }, (_, i) => (
            <Image
              key={i}
              src={Rating}
              alt="rating"
              className="inline-block"
              width={15}
              height={15}
            />
          ))}
          <span className="text-sm text-black">Rated 4.8/5 (243 reviews)</span>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-4xl font-bold ">
            Create your portfolio <br /> in minutes.
          </h1>
          <p className="hidden md:block text-sm leading-6 text-muted-foreground">
            With fiber you can setup your own personal portfolio in minutes{" "}
            <br /> with dozens of premade, beautiful templates.
          </p>
          <p className="md:hidden text-sm leading-6 text-muted-foreground">
            With fiber you can setup your own <br /> personal portfolio in
            minutes with <br /> dozens of premade, beautiful
            <br /> templates.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button variant="default" className="bg-indigo-600 w-full md:w-auto">
            Start Free Trial
          </Button>
          <Button
            variant="link"
            className="text-indigo-600 underline font-semibold"
          >
            View Examples
          </Button>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex gap-3 items-center">
            <Image src={CheckMark} alt="checkmark" width={20} height={20} />
            <span className="text-sm text-muted-foreground">
              No Credit Card Required
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <Image src={CheckMark} alt="checkmark" width={20} height={20} />
            <span className="text-sm text-muted-foreground">
              10 Free Template
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
