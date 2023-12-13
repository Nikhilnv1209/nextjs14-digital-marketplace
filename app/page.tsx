import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Experience swift and seamless delivery of your digital assets, ensuring they reach you promptly and efficiently.",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description:
      "Rest easy with our commitment to quality assurance, guaranteeing that each asset meets the highest standards of excellence.",
  },
  {
    name: "For the Planet",
    icon: Leaf,
    description:
      "Join our eco-friendly initiative! 'For the Planet' contributes to sustainability, planting a leaf for every download to foster a greener future.",
  },
];

export default function Page() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-10 text-lg max-w-prose text-muted-foreground">
            Empower Your Vision: Unleashing Excellence in Digital Creations.
            Your Marketplace for Premier Digital Assets, Crafted for Success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browser Trendings
            </Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: add product list */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-16">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="sm:flex text-center sm:items-start sm:text-left md:block md:text-center">
                <div className="sm:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full text-blue-900 bg-blue-100 ">
                    <perk.icon className="h-1/3 w-1/3 " />
                  </div>
                </div>

                <div className="mt-6 sm:ml-4 sm:mt-0 md:ml-0 md:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
