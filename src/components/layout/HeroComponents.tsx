import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function HeroHeader() {
  return (
    <div
      className={`${poppins.variable} text-[#f4f4f4] font-sans text-left p-4 md:p-10 rounded-lg max-w-[1300px] mx-auto my-8 md:my-16 md:text-center`}
    >
      <section className="font-poppins">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl text-left font-bold text-gray-800 sm:text-6xl lg:text-7xl">
                <div className="relative text-left inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#c3cc50]"></span>
                  <h1 className="relative text-4xl font-poppins text-gray-800 sm:text-6xl lg:text-7xl">
                    Knowly :
                  </h1>
                </div>
                Apprenez à votre rythme, réussissez à votre manière
                <span className="text-[#c3cc50]">.</span>
              </h1>

              <p className="mt-8 text-base text-black text-left sm:text-xl">
                Apprenez à coder en ligne ! 🚀 Cours interactifs, projets
                pratiques et experts dédiés pour vous aider à maîtriser la
                programmation. Commencez maintenant !
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mt-8 md:justify-left">
                <button className="button_app w-full sm:w-auto bg-[#c3cc50] text-[#1a1a1a] px-5 py-3 text-sm sm:text-base rounded-md hover:bg-slate-300 hover:text-[#c3cc50] cursor-pointer">
                  <a href="/apropos">En savoir plus</a>
                </button>
                <button className="w-full sm:w-auto bg-gray-800 text-[#FFF] px-5 py-3 text-sm sm:text-base rounded-md hover:opacity-90 cursor-pointer relative flex align-middle justify-center gap-3">
                  <Link href="/contact">Contactez-nous</Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mt-1"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                  </svg>
                  <div className="absolute -top-1 -right-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-md bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt="Knowly Hero Image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
