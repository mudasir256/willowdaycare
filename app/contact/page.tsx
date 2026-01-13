import styles from './page.module.css'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            Get in touch with Willow Daycare
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>
                We&apos;d love to hear from you! Whether you&apos;re interested in enrolling
                your child, have questions about our services, or would like to visit our
                nursery, please don&apos;t hesitate to contact us.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div>
                    <h3>Address</h3>
                    <p>Glangwili Day Nursery</p>
                    <p>Dolgwili Road, Carmarthen</p>
                    <p>SA31 2AF</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📞</div>
                  <div>
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+447375023731">+44 7375 023731</a>
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:willowdaycare12@gmail.com">
                        willowdaycare12@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.socialMedia}>
                <h3>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063876890214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/willowdaycare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className={styles.locationInfo}>
                <h3>Our Location</h3>
                <p>
                  Our nursery is conveniently located on Glangwili Hospital grounds in Carmarthen,
                  making it easily accessible for families in the area.
                </p>
                <div className={styles.mapPlaceholder}>
                  <p>📍 Glangwili Day Nursery</p>
                  <p>Dolgwili Road, Carmarthen, SA31 2AF</p>
                  <p className={styles.mapNote}>
                    For directions, please use the address above in your preferred map application.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

