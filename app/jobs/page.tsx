import Image from 'next/image'
import styles from './page.module.css'

export default function Jobs() {
  return (
    <div className={styles.jobsPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.pageTitle}>Careers at Willow Daycare</h1>
          <p className={styles.pageSubtitle}>
            Join our team and make a difference in children&apos;s lives
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.jobContent}>
            <div className={styles.jobImage}>
              <Image
                src="/willowjobpost1.jpg"
                alt="Job Opportunities at Willow Daycare"
                width={600}
                height={800}
                className={styles.jobPostImage}
              />
            </div>

            <div className={styles.jobInfo}>
              <h2>Are you looking for a career in childcare? 💭</h2>
              <p>
                We have excellent training and job opportunities for you at Willow Daycare 🌳✨
              </p>
              <p>
                If you are interested to find out more information or ask any questions,
                contact us directly.
              </p>

              <div className={styles.contactBox}>
                <h3>Get in Touch</h3>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:willowdaycare12@gmail.com">
                    willowdaycare12@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+447375023731">+44 7375 023731</a>
                </p>
                <p className={styles.excitement}>
                  We are excited to hear from you! ☺️💚
                </p>
              </div>

              <div className={styles.whyJoin}>
                <h3>Why Join Willow Daycare?</h3>
                <ul>
                  <li>Excellent training opportunities</li>
                  <li>Supportive team environment</li>
                  <li>Family-run business with a personal touch</li>
                  <li>Make a real difference in children&apos;s lives</li>
                  <li>Work in a beautiful, newly refurbished setting</li>
                  <li>Be part of an award-winning nursery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

