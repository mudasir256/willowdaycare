import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.pageTitle}>About Willow Daycare</h1>
          <p className={styles.pageSubtitle}>
            A family run business that puts children at the heart of our care
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2>Our Story</h2>
              <p>
                Willow Daycare is a family-run nursery located in the heart of Carmarthen,
                conveniently situated on Glangwili Hospital grounds. We have been providing
                exceptional childcare services with a focus on creating a home-from-home
                environment for every child.
              </p>
              <p>
                Our dedicated team of childcare professionals is committed to nurturing each
                child&apos;s individual development, ensuring they feel safe, happy, and
                supported in their learning journey.
              </p>
            </div>
            <div className={styles.aboutImages}>
              <Image
                src="/482484939_18032855549561995_3084417846801310453_n.jpg"
                alt="Willow Daycare Nursery"
                width={400}
                height={400}
                className={styles.aboutImage}
              />
              <Image
                src="/489365509_1102001451939074_6066663197909986239_n.jpg"
                alt="Children Learning"
                width={400}
                height={400}
                className={styles.aboutImage}
              />
              <Image
                src="/Screenshot2.png"
                alt="Willow Daycare Screenshot"
                width={400}
                height={400}
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className={styles.values}>
            <div className={styles.value}>
              <h3>🌳 Child-Centered Care</h3>
              <p>
                Every decision we make puts children at the heart of our care. We believe in
                creating an environment where each child can thrive and reach their full potential.
              </p>
            </div>
            <div className={styles.value}>
              <h3>👨‍👩‍👧‍👦 Family Approach</h3>
              <p>
                As a family-run business, we understand the importance of family. We work closely
                with parents and carers to ensure continuity of care between home and nursery.
              </p>
            </div>
            <div className={styles.value}>
              <h3>🌱 Learning Through Play</h3>
              <p>
                Our newly refurbished garden and indoor spaces provide rich learning environments
                where children can explore, discover, and learn through play.
              </p>
            </div>
            <div className={styles.value}>
              <h3>💚 Excellence in Care</h3>
              <p>
                Our achievement of the Top 20 Nurseries in Wales Award 2023 reflects our
                commitment to providing the highest standards of childcare and early years education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.locationInfo}>
            <h2 className="section-title">Our Location</h2>
            <div className={styles.locationDetails}>
              <p><strong>Glangwili Day Nursery</strong></p>
              <p>Dolgwili Road, Carmarthen</p>
              <p>SA31 2AF</p>
              <p>
                Our nursery is conveniently located on Glangwili Hospital grounds, making it
                easily accessible for families in Carmarthen and the surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

