export default function Footer() {
	return (
		<footer className="text-center py-6 border-t border-zinc-200 dark:border-zinc-700 mt-12 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 shadow-inner">
			<p className="text-zinc-700 dark:text-zinc-300 text-sm tracking-wide">
				&copy; {new Date().getFullYear()}{" "}
				<span className="font-semibold text-zinc-900 dark:text-white hover:text-blue-600 transition-colors duration-300">
					Alma Inna
				</span>
				. All rights reserved.
			</p>
			<p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
				Built with ❤️ using Next.js and Tailwind CSS.
			</p>
		</footer>
	);
}
