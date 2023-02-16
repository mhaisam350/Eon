import useEmblaCarousel from 'embla-carousel-react';

import styles from '../styles/EmblaCarousel.module.scss';

const EmblaCarousel = (props) => {

  const { slides, options } = props

  const [emblaRef] = useEmblaCarousel(options)

//   console.log(slides);

  return (

    <div className={styles.embla}>

      <div className={styles['embla__viewport']} ref={emblaRef}>

        <div className={styles['embla__container']}>

          {slides.map((slide, index) => (

            <div className={styles['embla__slide']} key={index}>

              <img
                className={styles['embla__slide__img']}
                src={slide.node.url}
                // alt="Your alt text"
              />

            </div>

          ))}

        </div>

      </div>
      
    </div>

  )

}

export default EmblaCarousel
