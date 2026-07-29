// /app/components/ArticleSidebar.jsx
import Link from 'next/link';

export default function ArticleSidebar({ article, headings = [] }) {
  const inisial = (article?.penulis || 'SC')
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <aside className="flex flex-col gap-8">
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
          {inisial}
        </div>
        <div>
          <div className="text-[13px] font-semibold text-slate-900 leading-tight">
            {article?.penulis || 'SmartCity Editorial'}
          </div>
          <div className="text-[12px] text-slate-500 leading-tight">
            {article?.peran || 'Public Service Contributor'}
          </div>
        </div>
      </div>

      {/* On this page */}
      {headings?.length > 0 && (
        <nav aria-label="On this page" className="border-l border-slate-200/80 pl-4">
          <div className="text-[13px] font-semibold text-slate-900 mb-3">On this page</div>
          <ul className="space-y-2.5">
            {headings.map((h) => (
              <li key={h.id} className={h.level === 3 ? 'pl-3' : ''}>
                <a
                  href={`#${h.id}`}
                  className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Promo card */}
      <div className="rounded-xl border border-slate-200/80 bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 overflow-hidden">
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.25),transparent_50%)]" />
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span className="text-[10px] tracking-widest text-white/80 font-medium">UI LIBRARY FOR</span>
          </div>
          <div className="absolute bottom-3 left-3 text-white text-lg font-semibold tracking-tight">
            Design Engineers
          </div>
        </div>
        <div className="p-4">
          <div className="text-[14px] font-semibold text-slate-900">Try Magic UI Pro</div>
          <p className="mt-1 text-[12px] text-slate-500 leading-relaxed">
            Magic UI Pro is a design system for building beautiful and responsive web applications.
          </p>
        </div>
      </div>
    </aside>
  );
}
