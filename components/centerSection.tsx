import React from "react";
import clock from "../public/time.svg";
import code from "../public/code.svg";
import responsive from "../public/allSizes.svg";
import pageImg from "../public/Page Image.png";
import avatar1 from "../public/User Avatar.svg";
import avatar2 from "../public/User Avatar 2.svg";
import avatar3 from "../public/User Avatar 32.svg";
import Image from "next/image";
import { Button } from "./ui/button";

const CenterSection = () => {
  const FirstCardData = [
    {
      icon: clock,
      title: "Build in minutes",
      description:
        "With a selection of premade templates,you can build out a portfolio in less than 10 minutes.",
    },
    {
      icon: code,
      title: "Add custom CSS",
      description:
        "With a selection of premade templates,you can build out a portfolio in less than 10 minutes.",
    },
    {
      icon: responsive,
      title: "Responsive",
      description:
        "With a selection of premade templates,you can build out a portfolio in less than 10 minutes.",
    },
  ];

  const FeedbackCard = [
    {
      img: avatar1,
      name: "Sarah Andrews",
      title: "$100k in revenue",
      description:
        "Setting up my portfolio with fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.",
    },
    {
      img: avatar2,
      name: "Mathew Higgins",
      title: "$20k in revenue",
      description:
        "Setting up my portfolio with fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.",
    },
    {
      img: avatar3,
      name: "Janice Dive",
      title: "$30k in revenue",
      description:
        "Setting up my portfolio with fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.",
    },
  ];
  return (
    <section className="flex flex-col gap-11 pb-4 md:pb-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-indigo-600 font-bold">Why Fiber?</h3>
        <h1 className="text-4xl font-bold md:hidden">
          A good portfolio <br /> means good <br />
          employability.
        </h1>
        <h1 className="hidden md:block text-4xl font-bold">
          A good portfolio means good <br />
          employability.
        </h1>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        {FirstCardData?.map((item, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <Image src={item.icon} alt="clock" />
            <h4 className="text-sm font-bold">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-0  bg-indigo-600 rounded-2xl p-7  md:justify-around">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold text-4xl">
            Divercify your <br /> portfolio.
          </h1>
          <p className="md:hidden text-sm text-slate-200 leading-6">
            Create an even more impressive portfolio by creating case studies
            for your projects. Simply follow our step-by-step guide.
          </p>
          <p className="hidden md:block text-sm text-slate-200 leading-6">
            Create an even more impressive portfolio by <br /> creating case studies
            for your projects. Simply <br />follow our step-by-step guide.
          </p>
          <Button
            variant={"default"}
            className="w-full md:w-1/2 text-indigo-600 bg-white font-bold"
          >
            Start Free Trial
          </Button>
        </div>
        <div className="md:max-w-lg">
          <Image src={pageImg} alt="pageImg" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-7">
        {FeedbackCard.map((item, index) => (
          <div
            className="flex flex-col gap-3 p-3 border rounded-lg"
            key={index}
          >
            <div className="flex gap-3 items-center">
              <Image src={item.img} alt="pageImg" />
              <div>
                <h3 className="text-indigo-600 font-bold text-sm">
                  {item.name}
                </h3>
                <h3 className="text-sm">{item.title}</h3>
              </div>
            </div>
            <p className="text-sm leading-6">{item.description}</p>
            <Button variant={"outline"} className="text-indigo-600 font-bold">
              {" "}
              {`View ${item.name?.split(" ")[0]} Portfolio`}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CenterSection;
