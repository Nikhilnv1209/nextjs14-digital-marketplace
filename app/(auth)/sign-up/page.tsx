"use client";
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container pt-20 flex flex-col w-full items-center justify-center">
        <div className="mx-auto w-full sm:w-[450px] items-center justify-center flex flex-col space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="w-20 h-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>

            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
            >
              Already have an account? Sign in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 w-full">
            <form>
              <div className="grid gap-2">
                <div className="grid gap-2 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" 
                  className={cn({
                    "focus-visible:ring-red-500":true,
                  })}
                  placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-2 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" 
                  className={cn({
                    "focus-visible:ring-red-500":true,
                  },)}
                  placeholder="Password"
                  />
                </div>

                <Button>Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
