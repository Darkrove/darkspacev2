"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons/index";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";

export function NavBar() {
  return (
    <header className="navbar-blur fixed z-[55] h-16 w-full !bg-black/10 px-2 transition">
      <div className="h-16 px-5 md:px-10 container max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Darkspace</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="md:hidden flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-7 w-7" />
            <span className="font-bold sm:inline-block">Darkspace</span>
          </Link>
        </div>
        <div>
          <Button className="home-button-border-gradient relative z-30 flex cursor-pointer items-center gap-2 !rounded-[7px] border-0 !bg-[#2F3152]/30 py-2 text-sm text-white !backdrop-blur-lg hover:brightness-110 md:text-[16px]">
            <span className="flex items-center justify-center space-x-2">
              <span>Login</span>
              <Icons.arrowRight className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 flex h-1 w-full flex-row items-center justify-center pt-4 opacity-100">
        <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent to-white/10"></div>
        <div className="h-[1px] w-1/2 bg-gradient-to-l from-transparent to-white/10"></div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
