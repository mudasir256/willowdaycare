import Image from 'next/image'
import styles from './page.module.css'

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our Services</h1>
          <p className={styles.pageSubtitle}>
            Comprehensive childcare services tailored to your child&apos;s needs
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.servicesImages}>
            <Image
              src="/489378988_1102970941842125_6862162550389353002_n.jpg"
              alt="Outdoor Learning at Willow Daycare"
              width={400}
              height={400}
              className={styles.serviceHeroImage}
            />
            <Image
              src="/489591931_1101311688674717_5548719137283398390_n.jpg"
              alt="Indoor Activities"
              width={400}
              height={400}
              className={styles.serviceHeroImage}
            />
            <Image
              src="/Screenshot3.png"
              alt="Willow Daycare Services"
              width={400}
              height={400}
              className={styles.serviceHeroImage}
            />
          </div>
          <div className={styles.services}>
            <div className={styles.service}>
              <div className={styles.serviceIcon}>👶</div>
              <h3>Early Years Care</h3>
              <p>
                We provide nurturing care for children from a young age, creating a safe and
                stimulating environment where they can grow and develop.
              </p>
            </div>

            <div className={styles.service}>
              <div className={styles.serviceIcon}>🌳</div>
              <h3>Outdoor Learning</h3>
              <p>
                Our newly refurbished garden provides an amazing outdoor learning environment
                where children can explore nature, develop physical skills, and learn about
                the world around them.
              </p>
            </div>

            <div className={styles.service}>
              <div className={styles.serviceIcon}>📚</div>
              <h3>Educational Activities</h3>
              <p>
                We offer a wide range of educational activities designed to support your
                child&apos;s development across all areas of learning, including communication,
                language, and social skills.
              </p>
            </div>

            <div className={styles.service}>
              <div className={styles.serviceIcon}>📱</div>
              <h3>Family App</h3>
              <p>
                Stay connected with your child&apos;s day through our amazing family app.
                Receive updates, photos, and information about your child&apos;s activities
                and progress throughout the day.
              </p>
            </div>

            <div className={styles.service}>
              <div className={styles.serviceIcon}>🏠</div>
              <h3>Home from Home</h3>
              <p>
                We create a warm, welcoming environment that feels like a home away from home.
                Our family-run approach ensures every child feels valued and cared for.
              </p>
            </div>

            <div className={styles.service}>
              <div className={styles.serviceIcon}>👥</div>
              <h3>Social Development</h3>
              <p>
                We provide opportunities for children to socialize, make friends, and develop
                important social skills in a supportive and inclusive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.highlightsSection}`}>
        <div className="container">
          <h2 className="section-title">What Makes Us Special</h2>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <h4>🏆 Award-Winning Care</h4>
              <p>Top 20 Nurseries in Wales Award 2023</p>
            </div>
            <div className={styles.highlight}>
              <h4>👨‍👩‍👧‍👦 Family-Run</h4>
              <p>Personalized care with a family touch</p>
            </div>
            <div className={styles.highlight}>
              <h4>📍 Convenient Location</h4>
              <p>Located on Glangwili Hospital grounds</p>
            </div>
            <div className={styles.highlight}>
              <h4>💚 Excellent Reviews</h4>
              <p>Highly recommended by parents</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

