import { Icons } from "@/components/shared/icons";
import LargeHeading from "@/components/ui/large-heading";
import { Separator } from "@/components/ui/separator";
import { team, investors } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {}

const page = () => {
  return (
    <main className="flex flex-col overflow-x-hidden min-h-screen items-center max-h-auto relative">
      <div className="mt-16 flex flex-col justify-start w-full h-full lg:w-[50%] md:w-2/3 p-8">
        <LargeHeading size={"sm"} className="text-left">
          Meet the team
        </LargeHeading>
        <div className="my-10 grid grid-cols-2 gap-x-5 gap-y-10 xs:grid-cols-3 sm:grid-cols-4">
          {team.length > 0 ? (
            team.map((member) => <TeamMember key={member.name} {...member} />)
          ) : (
            <p className="text-gray-400">No members yet</p>
          )}
        </div>
        <Separator className="mb-4" />
        <LargeHeading size={"sm"} className="text-left">
          Our investors
        </LargeHeading>
        <div className="my-10 grid grid-cols-2 gap-x-5 gap-y-10 xs:grid-cols-3 sm:grid-cols-4">
          {investors.length > 0 ? (
            investors.map((member: TeamMemberProps) => (
              <TeamMember key={member.name} {...member} />
            ))
          ) : (
            <p className="text-gray-400">No investors yet</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;

export interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl: string;
  socials?: {
    twitter?: string;
    twitch?: string;
    github?: string;
    gitlab?: string;
    dribbble?: string;
  };
}

const TeamMember = (props: TeamMemberProps) => (
  <div className="flex flex-col">
    <Image
      src={props.imageUrl}
      height={1000}
      width={1000}
      alt={`Portrait of ${props.name}`}
      className="m-0 inline-flex rounded-md object-cover !xs:w-36 !xs:h-36 !sm:w-40 !sm:h-40 h-32 w-32"
    />
    <h3 className="mb-0 mt-4 text-base">{props.name}</h3>
    <p className="text-xs">{props.title}</p>
    <div className="mt-3 flex flex-row space-x-2">
      {props.socials?.twitter && (
        <Link
          href={props.socials.twitter}
          rel="noreferrer"
          target="_blank"
          className="duration-300 hover:scale-105 hover:opacity-80"
        >
          <Icons.x className="h-[20px] w-[20px]" />
        </Link>
      )}
      {props.socials?.github && (
        <Link
          href={props.socials.github}
          rel="noreferrer"
          target="_blank"
          className="duration-300 hover:scale-105 hover:opacity-80"
        >
          <Icons.gitHub className="h-[20px] w-[20px]" />
        </Link>
      )}
    </div>
  </div>
);
