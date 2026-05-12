import {toHTML} from "@portabletext/to-html";
import {toPlainText} from "@portabletext/toolkit";
import {urlForImage} from "./image";

export function portableTextToPlainText(value: unknown) {
  try {
    return toPlainText(value as any);
  } catch {
    return "";
  }
}

export function portableTextToHtml(value: unknown) {
  return toHTML(value as any, {
    components: {
      marks: {
        link: ({children, value}) => {
          const href = value?.href;
          if (!href) return `<span>${children}</span>`;
          const rel = `nofollow noopener noreferrer`;
          return `<a href="${href}" target="_blank" rel="${rel}">${children}</a>`;
        },
      },
      types: {
        image: ({value}) => {
          const src = urlForImage(value).width(1200).fit("max").url();
          const alt = value?.alt ?? "";
          return `<img src="${src}" alt="${alt}" loading="lazy" />`;
        },
        codeField: ({value}) => {
          const code = value?.code ?? "";
          const language = value?.language ?? "text";
          return `<pre><code class="language-${language}">${code}</code></pre>`;
        },
        tableField: ({value}) => {
          const rows = value?.rows ?? [];
          const headerRow = rows[0] || [];
          const bodyRows = rows.slice(1);
          const thead = `<thead><tr>${headerRow
            .map((cell: string) => `<th>${cell}</th>`)
            .join("")}</tr></thead>`;
          const tbody = `<tbody>${bodyRows
            .map(
              (row: string[]) =>
                `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`
            )
            .join("")}</tbody>`;
          return `<table>${thead}${tbody}</table>`;
        },
      },
    },
  });
}

