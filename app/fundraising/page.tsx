import Image from 'next/image'
import styles from './page.module.css'

export default function Fundraising() {
  return (
    <div className={styles.fundraisingPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.pageTitle}>Fundraising</h1>
          <p className={styles.pageSubtitle}>
            Supporting Macmillan Cancer Support
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.fundraisingContent}>
            <div className={styles.fundraisingImage}>
              <Image
                src="/fundraisingpost.jpg"
                alt="Coffee Morning Fundraising Event"
                width={600}
                height={800}
                className={styles.fundraisingPostImage}
              />
            </div>

            <div className={styles.fundraisingInfo}>
              <h2>Coffee Morning for Macmillan Cancer Support</h2>
              
              <div className={styles.eventDetails}>
                <p className={styles.eventDate}>
                  <strong>Date:</strong> Friday, 26th September
                </p>
                <p>
                  Hello Everyone!
                </p>
                <p>
                  On Friday the 26th of September we will be hosting our own Coffee Morning
                  with the help of our Little Buds and Blooms here in Willow ☕️🍰
                </p>
                <p>
                  We will be providing our parents/carers with tea, coffee and a selection of
                  homemade cakes upon drop off and collection 😄
                </p>
              </div>

              <div className={styles.donationBox}>
                <h3>How to Donate</h3>
                <p>
                  Please follow the link for any donations and help us to raise money for a
                  fantastic charity 💚
                </p>
                <a
                  href="https://cm25.macmillan.org.uk/fundraising/CM25033562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Donate Now
                </a>
              </div>

              <div className={styles.thankYou}>
                <h3>Thank You</h3>
                <p>
                  We are grateful for all the support from our families and the community.
                  Together, we can make a difference for Macmillan Cancer Support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

