import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center gap-6 p-6 border-b border-zinc-200 dark:border-zinc-700">
      <Image
        className="w-28 h-28 rounded-full object-cover"
        src="/alma.jpg" // ganti dengan foto kamu
        alt="Alma Inna"
        width={120}
        height={120}
      />

      <div className="text-center md:text-left">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Alma Inna
        </h1>
        <h2 className="text-lg text-zinc-600 dark:text-zinc-300 mt-1">
          Mahasiswa Teknik Informatika — STITEK Bontang
        </h2>
        <p className="text-base text-zinc-500 dark:text-zinc-400 mt-2">
          Kutai Timur, Kalimantan Timur
        </p>

        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
          <a
            href="#contact"
            className="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
          >
            CONTACT
          </a>
          <a
            href="#projects"
            className="px-5 py-2 border border-blue-600 text-blue-600 text-sm rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            PROJECTS
          </a>
        </div>
      </div>
    </header>
  );
}
