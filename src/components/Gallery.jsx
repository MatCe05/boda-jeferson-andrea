import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";

// Estilos de Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Reveal from "./Reveal";

export default function Gallery() {
  const fotos = [
    { id: 1, url: "/foto1.jpg", alt: "Momento 1" },
    { id: 2, url: "/foto2.jpg", alt: "Momento 2" },
    { id: 3, url: "/foto3.jpg", alt: "Momento 3" },
    { id: 4, url: "/foto4.jpg", alt: "Momento 4" },
    { id: 5, url: "/foto5.jpg", alt: "Momento 5" },
    { id: 6, url: "/foto6.jpg", alt: "Momento 6" },
    { id: 7, url: "/foto7.jpg", alt: "Momento 7" },
    { id: 8, url: "/foto8.jpg", alt: "Momento 8" },
  ];

  return (
    <section className="w-full py-24 overflow-hidden flex flex-col items-center">
      <Reveal>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-olivina mb-16 uppercase tracking-[0.3em]">
          Retratos de nuestro amor
        </h2>
      </Reveal>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl px-4 relative"
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={-150}
          speed={900}
          loop={true}
          slideToClickedSlide={true}
          simulateTouch={true}
          allowTouchMove={true}

          coverflowEffect={{
            rotate: 0,
            stretch: -180,
            depth: 500,
            modifier: 1.2,
            slideShadows: false,
          }}

          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}

          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}

          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="gallery-swiper pb-24 pt-10"
        >
          {fotos.map((foto) => (
            <SwiperSlide
              key={foto.id}
              className="w-auto flex justify-center items-center"
            >
              <div className="flex flex-col items-center">

                {/* IMAGEN CON DESVANECIDO TOTAL */}
                <img
                  src={foto.url}
                  alt={foto.alt}
                  className="gallery-img h-[450px] md:h-[600px] w-[320px] md:w-[420px] object-cover"
                />

                <p className="mt-10 font-serif italic text-olivina/60 text-sm tracking-widest opacity-0 transition-opacity duration-500 swiper-slide-active:opacity-100">
                  — 2026 —
                </p>
              </div>
            </SwiperSlide>
          ))}

          {/* FLECHAS */}
          <div className="swiper-button-prev !text-olivina !left-0 md:!left-6 nav-arrow"></div>
          <div className="swiper-button-next !text-olivina !right-0 md:!right-6 nav-arrow"></div>
        </Swiper>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .gallery-swiper {
            overflow: visible !important;
          }

          /* FLECHAS */
          .nav-arrow {
            width: auto !important;
            height: auto !important;
            margin-top: 0 !important;
            transform: translateY(-50%) !important;
            background: none !important;
          }

          .nav-arrow:after {
            font-size: 28px !important;
            font-weight: 900;
            color: #98a67d !important;
          }

          /* 🎬 TRANSICIÓN */
          .swiper-slide {
            opacity: 0;
            transform: scale(0.85) translateY(40px);
            filter: blur(6px);
            transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
            z-index: 1;
          }

          .swiper-slide-prev,
          .swiper-slide-next {
            opacity: 0.4;
            transform: scale(0.92) translateY(10px);
            filter: blur(2px);
          }

          .swiper-slide-active {
            opacity: 1;
            transform: scale(1) translateY(0px);
            filter: blur(0px);
            z-index: 10;
          }

          /* 🖤 IMAGEN DESVANECIDA COMPLETA */
          .gallery-img {
            filter: grayscale(100%) brightness(0.9);

            /* 🔥 DESVANECIDO EN TODOS LOS LADOS */
            -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
            mask-image: radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);

            transition: transform 1.2s ease, filter 0.8s ease;
          }

          /* 🎥 ZOOM */
          .swiper-slide-active .gallery-img {
            transform: scale(1.08);
          }

          /* PAGINACIÓN */
          .swiper-pagination {
            bottom: 10px !important;
          }

          .swiper-pagination-bullet-active {
            background: #98a67d !important;
            width: 30px;
            border-radius: 10px;
          }

          @media (max-width: 768px) {
            .nav-arrow {
              display: none !important;
            }

            .gallery-img {
              height: 350px !important;
              width: 260px !important;
            }
          }
        `,
          }}
        />
      </motion.div>
    </section>
  );
}