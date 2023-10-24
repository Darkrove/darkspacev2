import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { apiUrls } from "@/lib/api-urls";
import LargeHeading from "@/components/ui/large-heading";
import { Eye } from "lucide-react";

async function getData() {
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

export async function Stats() {
  const res = await getData();
  const pageviews = res.pageviews?.value || 0;
  const pageviewDigits = pageviews.toString().split("");

  return (
    <div className="text-whitez-40 w-full rounded-[20px] p-10 border-gradient-effect news-banner-glow">
      <LargeHeading className="mb-5 text-white">
        Total views on this website so far
      </LargeHeading>

      <div className="flex justify-center items-center gap-2">
        <div className="home-button-border-gradient max-w-fit relative z-30 flex items-center justify-center gap-2 !rounded-[7px] border-0 !bg-[#2F3152]/30 py-2 text-sm text-white !backdrop-blur-lg hover:brightness-110 px-3">
          <Eye className="h-5 w-5" />
          <p className="font-bold">{pageviews} VIEWS</p>
        </div>
      </div>
    </div>
  );
}
