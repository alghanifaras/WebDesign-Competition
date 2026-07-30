import React from 'react';

function renderInline(text, keyPrefix = '') {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (/^\*\*[^*]+\*\*$/.test(p)) {
      return (
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-slate-900">
          {p.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={`${keyPrefix}-t-${i}`}>{p}</React.Fragment>;
  });
}

function highlightCode(code, lang) {
  const keywords = /\b(import|from|export|default|function|const|let|var|return|if|else|for|while|new|class|extends|typeof|of|in|null|undefined|true|false)\b/g;
  const strings = /("[^"]*"|'[^']*'|`[^`]*`)/g;
  const tags = /(&lt;\/?[A-Za-z][A-Za-z0-9]*)/g;

  let escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  escaped = escaped.replace(strings, '<span class="text-rose-300">$1</span>');
  escaped = escaped.replace(keywords, '<span class="text-fuchsia-300">$1</span>');
  escaped = escaped.replace(tags, '<span class="text-sky-300">$1</span>');
  return escaped;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export default function ArticleContent({ article }) {
  const raw = article?.konten || '';
  const lines = raw.split('\n');

  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: 'code', lang, content: codeLines.join('\n') });
      continue;
    }

    // Headings
    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', content: line.slice(4).trim() });
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', content: line.slice(3).trim() });
      i++;
      continue;
    }

    // Bullet list
    if (/^\s*-\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*-\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    // Blank line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph
    const paraLines = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('```') &&
      !/^\s*-\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({ type: 'p', content: paraLines.join(' ') });
  }

  return (
    <article className="text-slate-700">
      {/* Hero image */}
      {article?.thumbnail && (
        <div className="mb-10 overflow-hidden rounded-xl border border-slate-200/70 bg-slate-100">
          <img
            src={article.thumbnail}
            alt={article?.judul || 'article'}
            className="w-full h-auto max-h-[420px] object-cover"
          />
        </div>
      )}

      <div className="space-y-5 text-[15px] leading-[1.75] text-slate-700">
        {blocks.map((b, idx) => {
          if (b.type === 'h2') {
            return (
              <h2
                id={slugify(b.content)}
                key={idx}
                className="scroll-mt-24 text-[22px] sm:text-[24px] font-semibold text-slate-900 tracking-tight pt-6"
              >
                {b.content}
              </h2>
            );
          }
          if (b.type === 'h3') {
            return (
              <h3
                id={slugify(b.content)}
                key={idx}
                className="scroll-mt-24 text-[18px] sm:text-[19px] font-semibold text-slate-900 tracking-tight pt-4"
              >
                {b.content}
              </h3>
            );
          }
          if (b.type === 'p') {
            return (
              <p key={idx} className="text-slate-600">
                {renderInline(b.content, `p-${idx}`)}
              </p>
            );
          }
          if (b.type === 'ul') {
            return (
              <ul key={idx} className="list-disc pl-6 space-y-2 text-slate-600 marker:text-slate-400">
                {b.items.map((it, j) => (
                  <li key={j}>{renderInline(it, `ul-${idx}-${j}`)}</li>
                ))}
              </ul>
            );
          }
          if (b.type === 'ol') {
            return (
              <ol key={idx} className="list-decimal pl-6 space-y-2 text-slate-600 marker:text-slate-400">
                {b.items.map((it, j) => (
                  <li key={j}>{renderInline(it, `ol-${idx}-${j}`)}</li>
                ))}
              </ol>
            );
          }
          if (b.type === 'code') {
            const html = highlightCode(b.content, b.lang);
            return (
              <div key={idx} className="relative my-4">
                <pre className="overflow-x-auto rounded-xl bg-slate-900 text-slate-100 text-[13px] leading-relaxed p-4 border border-slate-800">
                  <code
                    className="font-mono"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </pre>
                <button
                  type="button"
                  aria-label="copy code"
                  className="absolute top-2 right-2 p-1.5 rounded-md bg-slate-800/70 hover:bg-slate-700 text-slate-300 text-[10px]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
}

export function extractHeadings(konten = '') {
  const lines = konten.split('\n');
  const headings = [];
  let inCode = false;
  for (const line of lines) {
    if (line.startsWith('```')) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    if (line.startsWith('## ')) {
      const text = line.slice(3).trim();
      headings.push({ level: 2, text, id: slugify(text) });
    } else if (line.startsWith('### ')) {
      const text = line.slice(4).trim();
      headings.push({ level: 3, text, id: slugify(text) });
    }
  }
  return headings;
}
