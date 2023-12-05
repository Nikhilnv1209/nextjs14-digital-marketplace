import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
