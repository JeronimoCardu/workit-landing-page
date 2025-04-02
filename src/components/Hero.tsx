export default function Hero() {
  return (
    <section className="heroContainer relative">
      <div className="mx-[5em] flex items-center justify-between px-[5em] py-[3.5em]">
        <img src="src/assets/images/logo-light.svg" alt="workit" />
        <p className="textPreset5 hover:text-green000 border-green000 cursor-pointer border-b-4 pb-1 text-white">
          Apply for access
        </p>
      </div>
      <div className="mx-auto w-[39.6875em] space-y-10 text-center">
        <h1 className="textPreset1 text-white">
          Data <span className="border-green000 border-b-4">tailored</span> to
          your needs.
        </h1>
        <button className="textPreset5 hover:text-green000 text-purple900 bg-green000 h-[3.5em] w-[10.125em] cursor-pointer outline-0 hover:border-2 hover:bg-transparent">
          Learn more
        </button>
      </div>
      <img className="absolute left-[-6em] top-[9em]" src="src/assets/images/bg-pattern-1.svg" />
      <img className="absolute right-0 top-4/10 " src="src/assets/images/bg-pattern-2.svg" />
      <img
        className="mx-auto w-[47.9375em] py-15 relative z-100"
        src="src/assets/images/image-hero.webp"
        alt="phone"
      />
      <img className="absolute bottom-0 z-10 bg-contain" src="src/assets/images/waveGray.svg" alt="" />
    </section>
  );
}
