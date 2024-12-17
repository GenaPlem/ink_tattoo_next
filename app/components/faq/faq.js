import styles from "./faq.module.css";

export default function Faq() {
  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <h2>Faq</h2>
        <div className={styles.faq__question}>
          <input type="checkbox" name="question_1" id="question_1" />
          <label htmlFor="question_1">How long does it take?</label>
          <div className={styles.faq__content}>
            <div>
              <p>
                The duration of a tattoo session depends on the size and
                complexity of the design. On average, a small tattoo can take
                about 1-2 hours, while a larger one may require multiple
                sessions.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faq__question}>
          <input type="checkbox" name="question_2" id="question_2" />
          <label htmlFor="question_2">Does it hurt?</label>
          <div className={styles.faq__content}>
            <div>
              <p>
                The level of pain experienced during a tattoo session varies
                from person to person. Most people describe it as a tolerable
                discomfort, similar to a cat scratch or a sunburn.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faq__question}>
          <input type="checkbox" name="question_3" id="question_3" />
          <label htmlFor="question_3">How should I care for my tattoo?</label>
          <div className={styles.faq__content}>
            <div>
              <p>
                After getting a tattoo, it`s important to follow proper
                aftercare instructions provided by your tattoo artist. This
                usually involves keeping the tattoo clean, avoiding direct
                sunlight, and applying a healing ointment.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faq__question}>
          <input type="checkbox" name="question_4" id="question_4" />
          <label htmlFor="question_4">How much does it cost?</label>
          <div className={styles.faq__content}>
            <div>
              <p>
                The cost of a tattoo depends on various factors such as size,
                design complexity, and the experience of the artist. It`s best
                to consult with your tattoo artist for an accurate price
                estimate.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faq__question}>
          <input type="checkbox" name="question_5" id="question_5" />
          <label htmlFor="question_5">Can I bring my own design?</label>
          <div className={styles.faq__content}>
            <div>
              <p>
                Absolutely! Many tattoo artists are happy to work with your own
                design ideas. Just make sure to discuss it with them beforehand
                to ensure it can be translated into a suitable tattoo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
