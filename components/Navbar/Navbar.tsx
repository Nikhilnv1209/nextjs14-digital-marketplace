import MaxWidthWrapper from "../MaxWidthWrapper";
import { Icons } from "../Icons";
import NavItems from "./NavItems";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const user = null;

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

            <div className="flex items-center ml-auto">
              <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-2 lg:flex-1">
                {/* If no user then signin button */}
                {user ? null : (
                  <Link
                    href={"/sign-in"}
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                  >
                    Sign In
                  </Link>
                )}

                {/* Seperator */}
                {user ? null : (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                )}

                {/* If no user then signup button */}
                {user ? (
                  <p>User</p>
                ) : (
                  <Link
                    href={"/sign-up"}
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                  >
                    Create Account
                  </Link>
                )}

                {/* Seperator */}
                {user ? (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                ) : null}

                {user ? null : (
                  <div className="flex lg:ml-6">
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>
                )}

                {/* CART */}
                <div className="flow-root ml:4 lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
