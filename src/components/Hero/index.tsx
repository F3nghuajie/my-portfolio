 
import hero from '../../assets/images/hero.png';

const Hero = () => (
  <section className="py-16 @container sm:py-24">
    <div className="flex flex-col gap-6 px-4 @[864px]:flex-row-reverse @[864px]:items-center">
      <div className="mx-auto w-full max-w-sm flex-shrink-0 @[864px]:w-1/3">
        <img className="aspect-square w-full rounded-full object-cover object-top shadow-lg scale-x-[-1]" alt="Professional headshot of a software engineer" src={hero}/>
      </div>
      <div className="flex flex-col gap-6 text-center @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:text-left">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Leo Zhang, Full-Stack Software Engineer</h1>
          <h2 className="text-gray-300 text-base font-normal leading-normal @[480px]:text-lg">I build innovative and efficient digital solutions that solve real-world problems.</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 @[864px]:justify-start">
          <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105" href="#projects">
            <span className="truncate">View My Work</span>
          </a>
          <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/10 text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105" href="#">
            <span className="truncate">Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
