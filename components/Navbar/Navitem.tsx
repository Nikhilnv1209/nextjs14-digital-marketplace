"use client";
import { MouseEventHandler } from "react";
import { Button } from "../ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavitemProps {
  category: Category;
  handleOpen: () => void;
  isOpen?: boolean;
  isAnyOpen?: boolean;
}

const Navitem = ({ category, handleOpen, isOpen, isAnyOpen }: NavitemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen && (
        <div
          className={cn(
            "absolute top-[101%] text-sm inset-x-0 text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": isOpen,
            }
          )}
        >
          {/* for Decoration */}
          <div
            className="shadow-md absolute inset-0 top-1/2 bg-gray-100"
            aria-hidden="true"
          />
          <div className="relative bg-white">
              {/* <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
              <div className="col-span-4 grid grid-cols-3">
              {category.featured.map((item) => (
                <div
                key={item.name}
                className="text-base sm:text-sm realtive group"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={item.imageSrc}
                      alt="Category feature image"
                      fill
                      />
                  </div>
                </div>
              ))}
              </div>
            </div> */}
              <div className="px-6 py-16 gap-x-5 flex justify-evenly">
                {category.featured.map((item) => (
                  <div
                    key={item.name}
                    className="flex-1 text-base sm:text-sm h-full realtive group flex flex-col gap-2"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        src={item.imageSrc}
                        alt="Category feature image"
                        fill
                        className="object-cover object-center h-full w-full"
                      />
                    </div>

                    <Link
                      href={item.href}
                      className="text-base sm:text-sm font-medium text-gray-900"
                    >
                      {item.name}
                    </Link>
                    <p aria-hidden="true">Shop Now</p>
                  </div>
                ))}
              </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Navitem;
