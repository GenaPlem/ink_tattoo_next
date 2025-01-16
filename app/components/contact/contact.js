import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className="container">
      <section className={styles.contacts} id="contacts">
        <h2 className="hidden-title">Contacts</h2>
        <div className={styles.contacts__wrapper}>
          <div className={styles.contacts__info}>
            <p>
              <i className="fa-regular fa-face-smile"></i> Tuesday - Sunday
              <br />
              01:00 pm - 09:00 pm
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> 10, Berkeley St,
              <br />
              Phibsborough, Dublin 7
            </p>
            <p>
              <i className="fa-solid fa-phone-volume"></i> 777-404-1337
            </p>
            <p>
              <i className="fa-regular fa-envelope"></i> inktattoo@404mail.com
            </p>
          </div>

          <ul className={styles.contacts__links}>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
                aria-label="Visit our facebook profile(opens in new tab)"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                aria-label="Visit our instagram profile(opens in new tab)"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener"
                aria-label="Visit our youtube channel(opens in new tab)"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://web.telegram.org/"
                target="_blank"
                rel="noopener"
                aria-label="Visit our telegram channel(opens in new tab)"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.contacts__map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2381.2031794691443!2d-6.2714321!3d53.3575186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e7fb94fc217%3A0x8036cf521161519f!2s10%2C%20James%20Mac%20Sweeney%20House%2C%20Berkeley%20St%2C%20Phibsborough%2C%20Dublin%207!5e0!3m2!1sen!2sie!4v1737030651510!5m2!1sen!2sie"
            width="600"
            height="450"
            styles={"border:0"}
            allowFullScreen=""
            title="Our location on the google maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
