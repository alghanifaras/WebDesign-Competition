import Link from "next/link";

export default function BackButton({ href = "/berita", text = "Kembali" }) {
  return (
    <Link
      href={href}
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white/40 backdrop-blur-md text-slate-700 font-medium rounded-full border border-white/50 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-white/60 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 group"
    >
      <svg
        className="w-5 h-5 text-slate-500 group-hover:-translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      {text}
    </Link>
  );
}