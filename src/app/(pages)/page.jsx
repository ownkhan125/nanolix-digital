import LanguageSection from "@/components/LanguageSection";
import LineContent from "@/components/LineContent";
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
        <div className="container  mb-14.5">
          <div className="w-5/10 mx-auto text-center">
            <h1 className="mb-8.5">Unique Ideas For Your Business.</h1>
            <h3 className="mb-6">
              An Innovative Agency For Forward-thinking Brands.
            </h3>
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

      {/* service-section */}
      <section className="service-section pt-100">
        <div className="container ">
          <div className="flex flex-col">
            <div className="w-full md:w-3/4 mx-auto">
              <LineContent
                text={"My Choose Us"}
                classname={"text-center mb-6"}
              />
              <h3 className="text-center">
                Create exceptional products with top-notch design, development,
                and marketing—on time
              </h3>
            </div>

            <div className="flex flex-wrap gap-y-2.5  pt-12.5">
              <div className="w-6/10 pe-2.5">
                <div className="card relative flex flex-row justify-between">
                  <div className="absolute right-0 bottom-0  h-full ">
                    <Image
                      src="/images/Union.png"
                      alt="Union"
                      width={475}
                      height={425}
                      className="h-full! object-cotain "
                    />
                  </div>
                  <div className="w-4/10">
                    <div className="flex flex-col justify-between ">
                      <div>
                        <h4 className="mb-4">A Dedicated Team</h4>
                        <p>
                          Skip the hassle of finding and vetting developers. At
                          WGMI Labs you get access to an entire dedicated team
                          including a Developer, Designer, and Project Manager
                          all for the price of a single employee.
                        </p>
                      </div>
                      <div className="flex flex-row  gap-7.5">
                        <div>
                          <h2 className="mb-2.5">1800+</h2>
                          <p>Project Completed</p>
                        </div>

                        <div>
                          <h2 className="mb-2.5">1600+</h2>
                          <p>Happy Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/Illustation.png"
                      alt="service"
                      width={323}
                      height={307}
                    />
                  </div>
                </div>
              </div>

              <div className="w-4/10 ">
                <div className="card pb-0! relative flex flex-col justify-between gap-4">
                  <h4 className="mb-4">Real‑Time Project Collaboration</h4>
                  <p>
                    Access a real-time project management board, allowing you to
                    track progress, request unlimited revisions, and communicate
                    with your dedicated team. The board facilitates clear
                    communication and efficient task management.
                  </p>

                  <Image
                    alt="service"
                    src="/images/frame.png"
                    width={500}
                    height={238}
                  />
                </div>
              </div>

              <div className="w-1/3 pe-2.5">
                <div className="card">
                  <h4 className="mb-4">Increase Speed</h4>
                  <p className="mb-6">
                    Our proven development process eliminates slowdowns with
                    faster project cycles and fewer meetings.  Accelerating your
                    software development up to 4x faster than traditional
                    agencies.
                  </p>

                  <Image
                    alt="service"
                    src={"/images/speed.png"}
                    width={500}
                    height={238}
                  />
                </div>
              </div>

              <div className="w-1/3 pe-2.5">
                <div className="card relative">
                  <h4 className="mb-4">Weekly Active Sprints</h4>
                  <p className="mb-6">
                    We crank through development sprints in weekly cycles. Each
                    sprint is comprised of multiple tasks that are scheduled to
                    be completed that week
                  </p>

                  <Image
                    alt="service"
                    src={"/images/sprints.png"}
                    width={550}
                    height={348}
                    className="lg:absolute -bottom-5.5 left-0 -mb-10 -ms-8.5 lg:m-0 mt-4"
                  />
                </div>
              </div>

              <div className="w-1/3">
                <div className="card relative">
                  <div className="w-3/4">
                    <h4 className="mb-4">Unlimited Tasks & Revisions</h4>
                    <p>
                      Once subscribed, you'll unlock unlimited development
                      services with ability to add endless development or design
                      tasks. Our unlimited revision policy ensures your software
                      or app is built exactly as you envision it.
                    </p>
                  </div>

                  <Image
                    alt="revision"
                    src={"/images/revision.png"}
                    height={500}
                    width={200}
                    className="absolute bottom-0 right-0 grayscale  -z-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-section */}

      {/* ideas-section */}
      <section className="ideas-section pt-100">
        <div className="container">
          <div className="w-1/3 mb-12">
            <LineContent text={"How it Works"} classname={"mb-6"} />
            <h3>A Simple Process to Bring Your Ideas to Life</h3>
          </div>
        </div>
      </section>
      {/* ideas-section */}
    </>
  );
}
