import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Menus } from "../types";
import styles from "../style";

type Props = {
  items: Menus[];
  showItemLabel?: boolean;
};

const LogoSlider = ({ items, showItemLabel }: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item: Menus) => (
          <div key={item.id} className="h-[80px] md:h-[120px]">
            <img
              src={item.img}
              className="h-full object-contain"
              alt="Partner Logo"
            />
            {showItemLabel && (
              <p className={` font-semibold ${styles.textSize} `}>
                {item.title}
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
