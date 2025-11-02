export default function About() {
	return (
		<section
			id="about"
			className="space-y-6 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-2xl shadow-md"
		>
			<h3 className="text-base uppercase tracking-widest font-semibold text-zinc-600 dark:text-zinc-300 border-b border-zinc-300 dark:border-zinc-700 pb-2">
				ABOUT
			</h3>

			<div className="text-zinc-700 dark:text-zinc-200 leading-relaxed text-justify">
				<p>
					Halo! Saya <b className="text-zinc-900 dark:text-white">Alma Inna</b>, seorang{" "}
					<span className="font-medium">mahasiswa Teknik Informatika di STITEK Bontang</span>.
					Saya memiliki ketertarikan dalam bidang <span className="font-medium">pengembangan web</span> dan{" "}
					<span className="font-medium">teknologi digital</span>.
				</p>

				<p className="mt-3">
					Saya senang mempelajari hal-hal baru, terutama yang berkaitan dengan dunia pemrograman
					dan teknologi informasi. Saya juga suka mengembangkan proyek sederhana yang bermanfaat
					dan dapat memberikan pengalaman belajar baru. 
					Tujuan saya adalah terus berkembang sebagai pengembang dan dapat berkontribusi dalam 
					pengembangan solusi teknologi di masa depan.
				</p>
			</div>
		</section>
	);
}
