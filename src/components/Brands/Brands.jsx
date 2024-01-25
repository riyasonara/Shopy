import styles from "./Brands.module.css";

const Brands = () => {
  const slides = [
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image1.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image7.png",
    "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png",
  ];

  return (
    <div className={styles.brandsection}>
      <div className={styles.brandsectionslider}>
        <h2 style={{color:"gray", textAlign:"center", marginBottom:"40px"}}>Trusted by 1000+ Companies</h2>
        <div className={styles.slides}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <img src={slide} alt={`trusted-brands-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
