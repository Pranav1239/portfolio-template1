import HeroContainers from "./HeroContainers";
import HeaderTextHero from "./HeaderTextHero";
export default function HeroSection() {
  return (
    <>
      <div className="container-hero">
      <section>
          <div className="head-text-hero ">
              <HeaderTextHero />
          </div>
        </section>
        <div className="line flex justify-center items-center">
          <hr className="opacity-30 w-[900px]"/>
        </div>
        <HeroContainers />

      </div>
    </>
  );
}
