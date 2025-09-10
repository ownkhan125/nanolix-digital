"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const LanguageSection = () => {
  const brands = [
    {
      img: "/images/product.png",
      title: "product",
    },

    {
      img: "/images/rapid.png",
      title: "rapid",
    },

    {
      img: "/images/aws.png",
      title: "aws",
    },

    {
      img: "/images/product.png",
      title: "product",
    },

    {
      img: "/images/rapid.png",
      title: "rapid",
    },

    {
      img: "/images/aws.png",
      title: "aws",
    },

    {
      img: "/images/product.png",
      title: "product",
    },

    {
      img: "/images/rapid.png",
      title: "rapid",
    },

    {
      img: "/images/aws.png",
      title: "aws",
    },

    {
      img: "/images/bubble.png",
      title: "bubble",
    },

    {
      img: "/images/make.png",
      title: "make",
    },

    {
      img: "/images/flutter.png",
      title: "flutter",
    },
  ];
  return (
    <section className="language-section mt-12.5">
      <div className="container ">
        <Swiper
          modules={[Autoplay]}
          loop={true} // infinite loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2500}
          slidesPerView={"auto"}
          className="mb-6"
          dir="rtl"
          spaceBetween={65}
          justify="center"
        >
          {brands.map((item, index) => (
            <SwiperSlide className="w-fit!" key={index}>
              {/* Image box */}
              <div className="img-wrapper w-[160px] h-[40px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={160}
                  height={40}
                  className="h-full!"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LanguageSection;
