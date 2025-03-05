import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/imageSlider.css'

const ImageSlider = ({ images }) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            loop={true}
            grabCursor={true}
        >
            {images.map((image) => (
                <SwiperSlide key={image.id}
                style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: '100%',
                    height: '499px',
                    overflow: 'hidden'
                }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${image.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImageSlider;