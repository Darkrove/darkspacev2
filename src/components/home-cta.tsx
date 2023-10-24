"use client";

import { LucideProps } from "lucide-react";
import clsx from "clsx";
import { Button, LinkButtonProps } from "@/components/ui/button";

interface Props extends LinkButtonProps {
  className?: string;
  text: string;
  target?: string;
  icon?: LucideProps;
  onClick?: () => void;
}

export function HomeCTA({ className, target, text, icon, ...props }: Props) {
  return (
    <Button
      size="lg"
      className={clsx(
        "home-button-border-gradient relative z-30 flex cursor-pointer items-center justify-center gap-2 !rounded-[7px] border-0 !bg-[#2F3152]/30 py-2 text-sm text-white !backdrop-blur-lg hover:brightness-110 md:text-[16px]",
        className
      )}
      target={target ? target : ""}
      {...props}
    >
      <>
        {icon && icon}
        {text}
      </>
    </Button>
  );
}

export default HomeCTA;
