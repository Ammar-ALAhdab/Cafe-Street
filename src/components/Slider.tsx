import { ReactNode } from "react";
// Import Swiper slide
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Keyboard } from "swiper/modules"";

type childrenProps = {
  children: ReactNode;
};

function Slider({ children }: childrenProps) {
  return (
    <div className="h-[440px] my-[25px] select-none">
      <Swiper
        keyboard={{
          enabled: true,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 4,
        }}
        modules={[Pagination, Keyboard]}
        className="mySwiper w-full h-full p-2"
        navigation={false}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {DELIVERY_BOXES.map((box) => {
          return (
            <SwiperSlide
              key={box.id}
              className="w-[300px] h-fit overflow-hidden cursor-pointer"
            >
              <DeliveryBox box={box} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
