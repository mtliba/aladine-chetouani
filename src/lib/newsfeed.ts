// One dated feed for the home page and the news page: one-line updates and full news articles.
import { t, pick, href, type Lang } from './i18n';
import { getUpdates, getNews } from './content';

export type FeedItem = {
  date: string;
  kind: string;
  title: string;
  summary: string;
  link: string;
  external: boolean;
  image: string;
  imageAlt: string;
  credit: string;
};

export function getFeed(lang: Lang): FeedItem[] {
  const s = t(lang);
  const isExternal = (link: string) => /^https?:/.test(link || '');
  const items: FeedItem[] = [
    ...getUpdates().map((u) => ({
      date: u.date,
      kind: s.kinds[u.kind] || s.kinds.other,
      title: pick(u, 'text', lang),
      summary: '',
      link: u.link ? (isExternal(u.link) ? u.link : href(lang, u.link)) : '',
      external: isExternal(u.link),
      image: u.image || '',
      imageAlt: pick(u, 'image_alt', lang) || '',
      credit: u.image_credit || '',
    })),
    ...getNews().map((a) => ({
      date: a.date,
      kind: s.categories[a.category] || s.categories.other,
      title: pick(a, 'title', lang),
      summary: pick(a, 'summary', lang),
      link: href(lang, `news/${a.slug}/`),
      external: false,
      image: a.image || '',
      imageAlt: pick(a, 'image_alt', lang) || '',
      credit: a.image_credit || '',
    })),
  ];
  return items.sort((a, b) => b.date.localeCompare(a.date));
}
