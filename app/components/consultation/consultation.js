export default function Consultation() {
  return (
    <section class="consultation" id="consultation">
      <div class="container">
        <div class="consultation__wrapper">
          <h2>Consultation</h2>
          <p>We`ll contact you shorty</p>
          <form action="https://formdump.codeinstitute.net" method="post">
            <label for="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
            <label for="number"></label>
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Phone number"
              required
            />
            <label for="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />
            <label for="description"></label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="6"
              placeholder="Describe what are you want us to make"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
          <a href="privacy_policy.html" id="privacy_policy">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
