import Image from 'next/image'
import styles from './page.module.css'

// All images from public folder including screenshots
const galleryImages = [
  '/470159827_18023703206561995_425792941470827035_n.jpg',
  '/482484939_18032855549561995_3084417846801310453_n.jpg',
  '/489144643_1101319175340635_5549614429387159798_n.jpg',
  '/489294873_1101917091947510_5775718697161044209_n.jpg',
  '/489365509_1102001451939074_6066663197909986239_n.jpg',
  '/489378988_1102970941842125_6862162550389353002_n.jpg',
  '/489591931_1101311688674717_5548719137283398390_n.jpg',
  '/489625592_1102471385225414_1999823880419476559_n.jpg',
  '/489754384_1103268715145681_8743909906181752722_n.jpg',
  '/490585005_1103788875093665_7189529865059732189_n.jpg',
  '/558279310_1243494551123096_5774498685344023484_n.jpg',
  '/574273289_1269517075187510_6020471895296010315_n.jpg',
  '/597703083_1306858131453404_3544576839085496132_n.jpg',
  '/597768018_1307632524709298_3858210797035301958_n.jpg',
  '/598848965_1307632568042627_5407821914663716754_n.jpg',
  '/599929232_1307632531375964_2366432996072439779_n.jpg',
  '/599929727_1307632574709293_2632493889755144136_n.jpg',
  '/601829885_1308502164622334_348390111830955643_n.jpg',
  '/601830656_1306858308120053_8567355077405193711_n.jpg',
  '/611170612_1321954959943721_8673121393104677266_n.jpg',
  '/611175259_1321955056610378_8938988123011392627_n.jpg',
  '/612332653_1321955049943712_8651802502137089829_n.jpg',
  '/613174036_1321955093277041_8227611855551000577_n.jpg',
  '/Screenshot.png',
  '/Screenshot1.png',
  '/Screenshot2.png',
  '/Screenshot3.png',
  '/Screenshot4.png',
  '/Screenshot5.png',
  '/Screenshot6.png',
  '/Screenshot7.png',
  '/Screenshot8.png',
  '/Screenshot9.png',
  '/Screenshot10.png',
  '/Screenshot11.png',
  '/Screenshot12.png',
  '/certifacte.jpg',
  '/fundraisingpost.jpg',
  '/willowjobpost1.jpg',
]

export default function Gallery() {
  return (
    <div className={styles.galleryPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.pageTitle}>Gallery</h1>
          <p className={styles.pageSubtitle}>
            A glimpse into life at Willow Daycare
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.galleryContent}>
            <p className={styles.galleryIntro}>
              Welcome to our gallery! Here you can see some of the wonderful moments and
              activities that happen at Willow Daycare. From our beautiful newly refurbished
              garden to our engaging indoor activities, we capture the joy and learning that
              happens every day.
            </p>
            <p className={styles.galleryNote}>
              For more photos and updates, please follow us on{' '}
              <a
                href="https://www.facebook.com/profile.php?id=100063876890214"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{' '}
              and{' '}
              <a
                href="https://www.instagram.com/willowdaycare"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <h2 className="section-title">Our Photo Gallery</h2>
          <div className={styles.imageGrid}>
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={styles.imageWrapper}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Image
                  src={image}
                  alt={`Willow Daycare Gallery Image ${index + 1}`}
                  width={400}
                  height={400}
                  className={styles.galleryImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <h2 className="section-title">Our Facilities</h2>
          <div className={styles.facilities}>
            <div className={styles.facility}>
              <div className={styles.facilityIcon}>🌳</div>
              <h3>Newly Refurbished Garden</h3>
              <p>
                Our amazing outdoor space provides children with opportunities to explore,
                play, and learn in a natural environment.
              </p>
            </div>
            <div className={styles.facility}>
              <div className={styles.facilityIcon}>🏠</div>
              <h3>Indoor Learning Spaces</h3>
              <p>
                Bright, welcoming indoor areas designed to support all areas of learning
                and development.
              </p>
            </div>
            <div className={styles.facility}>
              <div className={styles.facilityIcon}>🎨</div>
              <h3>Creative Areas</h3>
              <p>
                Dedicated spaces for arts, crafts, and creative expression where children
                can explore their imagination.
              </p>
            </div>
            <div className={styles.facility}>
              <div className={styles.facilityIcon}>📚</div>
              <h3>Reading Corners</h3>
              <p>
                Cozy reading areas that encourage a love of books and storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
