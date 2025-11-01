import { aboutCardsData } from '../../data';

const About = () => (
    <section className="flex scroll-mt-20 flex-col gap-10 px-4 py-10" id="about">
        <div className="flex flex-col gap-4">
            <h2 className="text-white tracking-light text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">About Me</h2>
            <p className="text-gray-300 text-base font-normal leading-normal max-w-[720px]">I'm a passionate software engineer with a knack for building robust and scalable applications from the ground up. With a strong foundation in both front-end and back-end technologies, I enjoy tackling complex challenges and turning ideas into reality. My goal is to leverage my skills to create meaningful products that make a difference.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 p-0">
            {aboutCardsData.map((card) => (
                <div key={card.title} className="flex flex-1 flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <span className="material-symbols-outlined text-primary text-2xl"> {card.icon} </span>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-white text-base font-bold leading-tight">{card.title}</h3>
                        <p className="text-gray-400 text-sm font-normal leading-normal">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default About;
