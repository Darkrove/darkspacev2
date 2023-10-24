import React from "react";
import LargeHeading from "@/components/ui/large-heading";
import { LucideIcon, LucideProps } from "lucide-react";
import { features } from "@/config/data";

interface Props {}

const BentoBoxes = () => {
  return (
    <div className="z-40  w-full py-10 md:p-10">
      <LargeHeading className="mb-5">
        Own your data for the first time
      </LargeHeading>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feat, index) => (
          <div
            key={feat.title + index}
            className="flex flex-col rounded-md p-10 home-button-border-gradient border-0 !bg-[#2F3152]/30 !backdrop-blur-lg"
          >
            <feat.icon className="h-7 w-7" />
            <h3 className="mb-1 mt-4 text-lg font-semibold leading-snug">
              {feat.title}
            </h3>
            <p className="mb-0 mt-1 text-sm text-gray-300">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoBoxes;
