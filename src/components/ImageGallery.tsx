const GALLERY_IMAGES = [
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151470/484978316_1808479776602735_1117950820531129718_n_1_mcrlev.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151471/0805_2_nyepub.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151471/94619370_242448817109689_6951844033924694016_n_t0fbnz.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151468/0805_10_dv55og.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151472/0805_5_ypjs5y.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151469/0805_9_wwjcj3.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151472/0805_4_ta4j30.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151355/0805_6_smoq0g.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151360/0805_7_hcftoe.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151476/0805_3_ffmbxh.jpg',
];

const ImageGallery = () => {
  return (
    <section className="overflow-hidden bg-[#FAF8F5] pb-4 pt-16 sm:pb-6 sm:pt-20" aria-labelledby="lookbook-heading">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.38em] text-[#8b8178] sm:mb-8">
          Lookbook
        </p>

        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <h2
            id="lookbook-heading"
            className="lg:col-span-7 max-w-[760px] text-[clamp(1.75rem,3.5vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#171513]"
          >
            <span className="block">Diện mạo mới, tự tin hơn </span>
            <span className="mt-2 block font-display font-normal italic tracking-[-0.045em] text-[#4a433d]">
              Cùng Triệu Salon tại Lái Thiêu
            </span>
          </h2>

          <p className="lg:col-span-5 font-body pb-1 text-[15px] leading-[1.75] tracking-[-0.01em] text-[#6d655e]">
            Khám phá diện mạo mới tại Triệu Salon Lái Thiêu — nơi mỗi kiểu tóc được chăm chút theo cá tính, phong cách và đường nét riêng của bạn. Từ cắt, nhuộm đến tạo kiểu, chúng tôi giúp bạn tìm thấy mái tóc phù hợp và tự tin hơn mỗi ngày.
          </p>
        </div>
      </div>

      <div
        className="gallery-marquee-viewport mt-20 overflow-hidden sm:mt-28"
        style={{ height: 'clamp(260px, 44vw, 580px)' }}
      >
        <div className="gallery-marquee-track flex h-full w-max will-change-transform gap-3">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
            <div
              key={i}
              className="h-full shrink-0 overflow-hidden"
              style={{ width: 'clamp(200px, 33vw, 480px)' }}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                loading="lazy"
                className="h-full w-full select-none object-cover object-center"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
