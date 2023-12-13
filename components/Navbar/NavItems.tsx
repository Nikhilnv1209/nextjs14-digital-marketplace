"use client";
import { useState, useRef, useEffect } from "react";
import { PRODUCT_CATEGORIES } from "@/config";
import Navitem from "./Navitem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;
  // to check if we are clicking outside the nav
  const navref = useRef<HTMLDivElement>(null);

  useOnClickOutside(navref, () => {
    setActiveIndex(null);
  });

  return (
    <div className="flex items-center gap-4 h-full" ref={navref}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = activeIndex === index;

        return (
          <Navitem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
