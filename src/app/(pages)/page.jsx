import LanguageSection from "@/components/LanguageSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* hero-section */}
      <section className="hero-section">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-1">
          <Image
            src="/images/ellipse.png"
            alt="Hero Image"
            width={820}
            height={730}
          />
        </div>

        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-1">
          <Image
            src="/images/ellipse.png"
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div> */}
        <div className="container mx-auto mb-14.5">
          <div className="w-[40%] mx-auto text-center">
            <h1 className="mb-8.5">Unique Ideas For Your Business.</h1>
            <h2 className="mb-6">
              An Innovative Agency For Forward-thinking Brands.
            </h2>
            <p className="fs-18 mb-10">
              Get unlimited development and design services with a simple
              monthly subscription. We know exactly what it takes to develop and
              launch successful software companies for non-technical
              entreprenuers.
            </p>

            <div className="flex flex-row justify-center gap-2.5">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-primary">View Portfolio</button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-8.5 px-3 sm:px-0">
          <div className="w-1/4">
            <Image
              src="/images/main.png"
              alt="main"
              width={430}
              height={350}
              className="w-full! "
            />
          </div>
          <div className="w-2/4">
            <div className="img-wrapper overflow-hidden rounded-md">
              <Image
                src="/images/center.png"
                alt="main"
                width={430}
                height={200}
                className=" w-full! "
              />
            </div>
          </div>
          <div className="w-1/4">
            <Image
              src="/images/main2.png"
              alt="main"
              width={430}
              height={350}
              className=" w-full! "
            />
          </div>
        </div>
      </section>
      {/* hero-section */}

      {/* language-section */}
      <LanguageSection />
      {/* language-section */}
    </>
  );
}
