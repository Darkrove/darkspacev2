import React, { PropsWithChildren } from "react";
import LargeHeading from "@/components/ui/large-heading";
import Image from "next/image";

interface Props {}

const WormHole = () => {
  return (
    <div className="pb-10 z-40">
      <LargeHeading className="mb-5">Powered by web3 technologies</LargeHeading>
      <div className="mt-1 flex justify-center gap-2 overflow-x-auto">
        <Logos />
      </div>
    </div>
  );
};

const Logos = () => {
  const logosData = [
    { src: "/ipfs.svg", description: "logo ipfs" },
    { src: "/metamask.svg", description: "logo metamask" },
    { src: "/filecoin.svg", description: "logo filecoin" },
    { src: "/thirdweb.svg", description: "logo thirdweb" },
    { src: "/ethereum.svg", description: "logo ethereum" },
  ];

  return (
    <div className="  flex gap-2">
      {logosData.map((logo, index) => (
        <Box key={index} src={logo.src} description={logo.description} />
      ))}
    </div>
  );
};

const Box = ({
  src,
  description,
  ...props
}: PropsWithChildren<{ src: string; description?: string }>) => {
  return (
    <div className="flex justify-center items-center home-button-border-gradient !rounded-[7px] border-0 !bg-[#2F3152]/30 p-2 text-sm text-white !backdrop-blur-lg hover:brightness-110 md:text-[16px]">
      <Image
        src={src}
        className="transition grayscale"
        loading="lazy"
        width={50}
        height={50}
        alt={description ? description : "logo"}
      />
    </div>
  );
};

export default WormHole;
