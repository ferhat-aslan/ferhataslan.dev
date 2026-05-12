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
      },
    },
  });
}

