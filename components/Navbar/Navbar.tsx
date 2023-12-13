import MaxWidthWrapper from "../MaxWidthWrapper";
import { Icons } from "../Icons";
import NavItems from "./NavItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white top-0 inset-x-0 h-16">
      <MaxWidthWrapper>
      <nav className="relative border-b mx-auto">
          <div className="flex h-16 items-center">
            {/* TODO MOBILE NAV */}

            {/* LOGO */}
            <div className="ml-4 lg:ml-0 flex">
              <Link href="/">
              <Icons.logo className="h-12 w-12" />
              </Link>
            </div>

            {/* NAV */}
            <div className="hidden md:block md:ml-8 z-50 lg:self-stretch">
              <NavItems />
            </div>
          </div>
      </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
