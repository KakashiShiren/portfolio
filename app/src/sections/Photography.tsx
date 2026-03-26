const photos = Array.from({ length: 32 }, (_, index) => {
  const photoNumber = index + 1;
  const extension =
    photoNumber <= 17 || photoNumber >= 23 ? 'jpeg' : 'jpg';

  return {
    src: `/photo_${photoNumber}.${extension}`,
    alt: `Photography shot ${photoNumber}`,
  };
});

const Photography = () => {
  const marqueePhotos = [...photos, ...photos];

  return (
    <section id="photography" className="relative overflow-hidden bg-dark py-24 text-cream md:py-32">
      <div className="section-pad mb-14 w-full md:mb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-cream/45">
              (Photography)
            </span>
            <h2 className="section-title font-semibold">THROUGH MY LENS /</h2>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-cream/62 md:text-base lg:col-span-5 lg:col-start-8">
            Outside of code, I am usually chasing light, shadows, quiet details, and the kind of
            moments that feel cinematic for no reason at all.
          </p>
        </div>
      </div>

      <div className="photo-marquee relative">
        <div className="photo-marquee-fade-left" />
        <div className="photo-marquee-fade-right" />

        <div className="photo-marquee-track">
          {marqueePhotos.map((photo, index) => (
            <figure key={`${photo.src}-${index}`} className="photo-card">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
