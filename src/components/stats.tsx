import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { apiUrls } from "@/lib/api-urls";
import LargeHeading from "@/components/ui/large-heading";
import { Eye, File, Upload } from "lucide-react";
import { formatBytes } from "@/lib/utils";

async function getUmamiData() {
  const res = await fetch(
    apiUrls.umami.get("96a61cba-83cb-4307-9abe-ca5f3ee64129"),
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function getDarkspaceData() {
  const res = await fetch(apiUrls.darkspace.get, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function Stats() {
  const resUmami = await getUmamiData();
  const resDarkspace = await getDarkspaceData();
  const pageviews = resUmami.pageviews?.value || 0;
  const uplodaFiles = resDarkspace.filecount || 0;
  const uplodSize = formatBytes(resDarkspace.size) || 0;

  return (
    <div className="text-whitez-40 w-full rounded-[20px] p-10 border-gradient-effect news-banner-glow">
      <LargeHeading className="mb-5 text-white">
        Total views and uploads so far
      </LargeHeading>

      <div className="flex md:flex-row flex-col justify-center items-center gap-3 px-10">
        <div className="home-button-border-gradient w-full relative z-30 flex items-center justify-center gap-2 !rounded-[7px] border-0 !bg-[#2F3152]/30 py-2 text-sm text-white !backdrop-blur-lg hover:brightness-110 px-3">
          <Eye className="h-5 w-5" />
          <p className="font-bold">{pageviews} VIEWS</p>
        </div>
        <div className="home-button-border-gradient w-full relative z-30 flex items-center justify-center gap-2 !rounded-[7px] border-0 !bg-[#2F3152]/30 py-2 text-sm text-white !backdrop-blur-lg hover:brightness-110 px-3">
          <File className="h-5 w-5" />
          <p className="font-bold">{uplodaFiles} FILES</p>
        </div>
        <div className="home-button-border-gradient w-full relative z-30 flex items-center justify-center gap-2 !rounded-[7px] border-0 !bg-[#2F3152]/30 py-2 text-sm text-white !backdrop-blur-lg hover:brightness-110 px-3">
          <Upload className="h-5 w-5" />
          <p className="font-bold">{uplodSize}</p>
        </div>
      </div>
    </div>
  );
}
