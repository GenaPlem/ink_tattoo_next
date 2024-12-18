export default function Contact() {
  return (
    <div class="container">
      <section class="contacts" id="contacts">
        <h2 class="hidden-title">Contacts</h2>
        <div class="contacts__wrapper">
          <div class="contacts__info">
            <p>
              <i class="fa-regular fa-face-smile"></i> Tuesday - Sunday
              <br />
              01:00 pm - 09:00 pm
            </p>
            <p>
              <i class="fa-solid fa-location-dot"></i> 10, Berkeley St,
              <br />
              Phibsborough, Dublin 7
            </p>
            <p>
              <i class="fa-solid fa-phone-volume"></i> 777-404-1337
            </p>
            <p>
              <i class="fa-regular fa-envelope"></i> inktattoo@404mail.com
            </p>
          </div>

          <ul class="contacts__links">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
                aria-label="Visit our facebook profile(opens in new tab)"
              >
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                aria-label="Visit our instagram profile(opens in new tab)"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener"
                aria-label="Visit our youtube channel(opens in new tab)"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://web.telegram.org/"
                target="_blank"
                rel="noopener"
                aria-label="Visit our telegram channel(opens in new tab)"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="contacts__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.2019491270757!2d-6.2694777562738055!3d53.35754062002627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e7fb94fc217%3A0x8036cf521161519f!2s10%2C%20James%20Mac%20Sweeney%20House%2C%20Berkeley%20St%2C%20Phibsborough%2C%20Dublin%207!5e0!3m2!1sru!2sie!4v1692103153539!5m2!1sru!2sie"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            title="Our location on the google maps"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
