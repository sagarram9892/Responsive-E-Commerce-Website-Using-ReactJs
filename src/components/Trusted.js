import React from "react";
import "../styles/Trusted.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay , Pagination } from "swiper/modules";

function Trusted() {
  return (
    <>
      <div className="t-container">
        <div className="child-c">
          <h2>Trusted by 1000+ companies</h2>

          <Swiper
            breakpoints={{
          
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay , Pagination]}
            className="mySwiper"
            style={{display:"flex", justifyContent:"center", alignItems:"center"}}
          >
            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"
              />
            </SwiperSlide>
            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brands"
              />
            </SwiperSlide>
            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brands"
              />
            </SwiperSlide>
            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brands"
              />
            </SwiperSlide>
            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="trusted-brands"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Trusted;
