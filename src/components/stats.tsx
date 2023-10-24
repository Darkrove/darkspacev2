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
    <div className="pb-10 z-40">
      <LargeHeading className="mb-5">
        Total views on this website so far
      </LargeHeading>

      <div className="flex justify-center items-center gap-2">
        {pageviewDigits.map(
          (digit: string, index: React.Key | null | undefined) => (
            <div key={index} className="p-2 border">
              {digit}
            </div>
          )
        )}
      </div>
    </div>
  );
}
