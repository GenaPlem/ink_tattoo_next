import Image from "next/image";

export default function Gallery() {
  return (
    <section class="gallery" id="gallery">
      <div class="container">
        <h2>Gallery</h2>
        <div class="gallery__images">
          <Image
            src="assets/images/gallery_1.webp"
            alt="Tattoo artist works example"
          />
          <Image
            src="assets/images/gallery_2.webp"
            alt="Tattoo artist works example"
          />
          <Image
            src="assets/images/gallery_3.webp"
            alt="Tattoo artist works example"
          />
          <Image
            src="assets/images/gallery_4.webp"
            alt="Tattoo artist works example"
          />
          <Image
            src="assets/images/gallery_5.webp"
            alt="Tattoo artist works example"
          />
          <Image
            src="assets/images/gallery_6.webp"
            alt="Tattoo artist works example"
          />
          <Image
            src="assets/images/gallery_7.webp"
            alt="Tattoo artist works example"
          />
        </div>
      </div>
    </section>
  );
}
