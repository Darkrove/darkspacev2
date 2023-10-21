import Image from "next/image";
import Layout from "@/components/layout/layout";
import { Background } from "@/components/app/background/background";
import CyclingImage from "@/components/app/image/cycling-image";
import { NewBanner } from "@/components/banner";
import WormHole from "@/components/worm-hole";
import LargeHeading from "@/components/ui/large-heading";

export default function Page() {
  return (
    <>
      <Background />
      <Image
        loading="eager"
        className="absolute-horizontal-center fade-in"
        width={1278}
        height={626}
        alt="l"
        src="/images/headergradient.webp"
      />
      <div className="m-auto flex w-full max-w-7xl flex-col items-center px-4">
        <div className="mt-22 lg:mt-28" id="content" aria-hidden="true" />
        <div className="mt-24 lg:mt-8" />
        <NewBanner
          headline="Alpha release is finally here!"
          href="/blog/october-alpha-release"
          link="Read post"
          className="mt-[50px] lg:mt-0"
        />
        <LargeHeading className="mb-3 bg-clip-text px-2 text-center font-bold text-white">
          Securely Store and Share Your Videos and Images on the Blockchain.
        </LargeHeading>
        <p className="animation-delay-1 fade-in-heading text-md leading-2 z-30 mb-8 mt-1 max-w-4xl text-center text-gray-450 lg:text-lg lg:leading-8">
          Dive and Experience the power of decentralization and never worry
          about your stuff being lost or snooped.
          <br />
          <span className="hidden sm:block">
            Designed for creators, hoarders and the painfully disorganized.
          </span>
        </p>
        {/* <Downloads /> */}
        <div className="pb-6 xs:pb-24">
          <div
            className="xl2:relative z-30 flex h-[255px] w-full px-6
				 sm:h-[428px] md:mt-[75px] md:h-[428px] lg:h-auto"
          >
            <Image
              loading="eager"
              className="absolute-horizontal-center animation-delay-2 top-[380px] fade-in xs:top-[180px] md:top-[130px]"
              width={1200}
              height={626}
              alt="l"
              src="/images/appgradient.webp"
            />
            <div className="relative m-auto mt-10 flex w-full max-w-7xl overflow-hidden rounded-lg transition-transform duration-700 ease-in-out hover:-translate-y-4 hover:scale-[1.02] md:mt-0">
              <div className="z-30 flex w-full rounded-lg border-t border-app-line/50 backdrop-blur">
                <CyclingImage
                  loading="eager"
                  width={1278}
                  height={626}
                  alt="spacedrive app"
                  className="rounded-lg"
                  images={[
                    "/images/app/1.webp",
                    "/images/app/2.webp",
                    "/images/app/3.webp",
                    "/images/app/4.webp",
                    "/images/app/5.webp",
                    "/images/app/10.webp",
                    "/images/app/6.webp",
                    "/images/app/7.webp",
                    "/images/app/8.webp",
                    "/images/app/9.webp",
                  ]}
                />
                <Image
                  loading="eager"
                  className="pointer-events-none absolute opacity-100 transition-opacity duration-1000 ease-in-out hover:opacity-0 md:w-auto"
                  width={2278}
                  height={626}
                  alt="l"
                  src="/images/appgradientoverlay.png"
                />
              </div>
            </div>
          </div>
        </div>
        <WormHole />
        {/* <BentoBoxes /> */}
        {/* <CloudStorage /> */}
        {/* <DownloadToday isWindows={deviceOs?.isWindows} /> */}
        {/* <div className="h-[100px] sm:h-[200px] w-full" /> */}
      </div>
    </>
  );
}
