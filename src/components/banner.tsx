import { Newspaper } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

export interface NewBannerProps {
  headline: string;
  href: string;
  link: string;
  className?: string;
}

export function NewBanner(props: NewBannerProps) {
  const { headline, href, link } = props;

  return (
    <Link
      href={href}
      className={clsx(
        props.className,
        "news-banner-border-gradient news-banner-glow animation-delay-1 fade-in-whats-new z-10 mb-5 flex w-fit flex-row rounded-full bg-black/10 px-5 py-2.5 text-xs backdrop-blur-md  transition hover:bg-purple-900/20 sm:w-auto sm:text-base"
      )}
    >
      <div className="flex items-center gap-2">
        <Newspaper className="text-white w-5 h-5" />
        <p className="font-regular truncate text-white">{headline}</p>
      </div>
      <div role="separator" className="h-22 mx-4 w-[1px] bg-zinc-700/70" />
      <span className="flex gap-1 items-center font-regular shrink-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent decoration-primary-600">
        {link} <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
