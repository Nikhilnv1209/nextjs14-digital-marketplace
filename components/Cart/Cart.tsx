"use client";
import { ShoppingCartIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { formatePrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

const Cart = () => {
  const itemcount = 0;
  const fee = 49;

  return (
    <Sheet>
      <SheetTrigger className="group flex items-center p-2">
        <ShoppingCartIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-600 group-hover:text-gray-900">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-1 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemcount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/* TODO: Cart Items*/}
              Cart items
            </div>
            <div className="space-y-4">
              <Separator />
              <div className="space-y-1.5 pr-6 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatePrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatePrice(fee)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href={"/cart"}
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Continue to checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center space-y-2">
            <div className="relative h-64 w-64 text-muted-foreground">
              <Image
                src="/hippo-empty-cart.png"
                alt="Empty cart placeholder"
                fill
              />
            </div>
            <span className="text-xl font-semibold">Your cart is empty</span>
            <SheetTrigger asChild>
              <Link
                href={"/products"}
                className={buttonVariants({
                  variant: "link",
                  size:"sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
