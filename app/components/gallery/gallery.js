import Image from "next/image";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className={styles.gallery__images}>
          <div className={styles.image__container}>
            <Image
              src="/images/gallery_1.png"
              alt="Tattoo artist works example"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.image__container}>
            <Image
              src="/images/gallery_2.png"
              alt="Tattoo artist works example"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.image__container}>
            <Image
              src="/images/gallery_3.png"
              alt="Tattoo artist works example"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.image__container}>
            <Image
              src="/images/gallery_4.png"
              alt="Tattoo artist works example"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.image__container}>
            <Image
              src="/images/gallery_5.png"
              alt="Tattoo artist works example"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.image__container}>
            <Image
              src="/images/gallery_6.png"
              alt="Tattoo artist works example"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.image__container}>
            <Image
              src="/images/gallery_7.png"
              alt="Tattoo artist works example"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
