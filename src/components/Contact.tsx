export default function Contact() {
  return (
    <section
      id="contact"
      className="space-y-8 py-10 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl shadow-md p-6"
    >
      <h3 className="text-base uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-300 border-b pb-2 border-zinc-200 dark:border-zinc-700">
        Kontak
      </h3>

      <p className="text-zinc-700 dark:text-zinc-300 text-justify leading-relaxed">
        Jika Anda ingin berkolaborasi dalam proyek pengembangan web, berbagi ide,
        atau sekadar menjalin komunikasi, silakan hubungi saya melalui salah satu
        platform berikut:
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mt-4">
        {/* Email */}
        <a
          href="mailto:almainna@gmail.com"
          className="flex items-center gap-x-2.5 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>Email</span>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@ALMAINNA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2.5 text-zinc-700 dark:text-zinc-300 hover:text-red-500 transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.87488 13.25C1.35095 10.7774 1.35095 8.22255 1.87488 5.75C1.94372 5.49891 2.07674 5.27006 2.26084 5.08595C2.44494 4.90185 2.67379 4.76884 2.92488 4.7C6.94747 4.03359 11.0523 4.03359 15.0749 4.7C15.326 4.76884 15.5548 4.90185 15.7389 5.08595C15.923 5.27006 16.056 5.49891 16.1249 5.75C16.6488 8.22255 16.6488 10.7774 16.1249 13.25C16.056 13.5011 15.923 13.7299 15.7389 13.914C15.5548 14.0981 15.326 14.2312 15.0749 14.3C11.0523 14.9665 6.94746 14.9665 2.92488 14.3C2.67379 14.2312 2.44494 14.0981 2.26084 13.914C2.07674 13.7299 1.94372 13.5011 1.87488 13.25Z"
              stroke="currentColor"
              strokeWidth="1.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.49988 11.75L11.2499 9.5L7.49988 7.25V11.75Z"
              stroke="currentColor"
              strokeWidth="1.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>YouTube</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/iinnnaa0/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2.5 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
