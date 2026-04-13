import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

export type ChapterMeta = {
  slug: string;
  title: string;
  chapterNumber?: number;
  date?: string;
  summary?: string;
  status?: string;
  tags?: string[];
  coverImage?: string;
};

export type Chapter = ChapterMeta & {
  content: string;
};

const chaptersDir = path.join(process.cwd(), 'content', 'chapters');

async function readChapterFiles() {
  const entries = await fs.readdir(chaptersDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'));
}

function toStringOrUndefined(value: unknown) {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function toNumberOrUndefined(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

function toStringArrayOrUndefined(value: unknown) {
  return Array.isArray(value) && value.every((v) => typeof v === 'string') ? value : undefined;
}

export async function getAllChapters(): Promise<ChapterMeta[]> {
  const files = await readChapterFiles();
  const chapters = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(chaptersDir, filename);
      const raw = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(raw);

      const title = toStringOrUndefined(data.title) ?? slug;
      const chapterNumber = toNumberOrUndefined(data.chapterNumber);
      const date = toStringOrUndefined(data.date);
      const summary = toStringOrUndefined(data.summary);
      const status = toStringOrUndefined(data.status);
      const tags = toStringArrayOrUndefined(data.tags);
      const coverImage = toStringOrUndefined(data.coverImage);

      const meta: ChapterMeta = {
        slug,
        title,
        chapterNumber,
        date,
        summary,
        status,
        tags,
        coverImage,
      };

      return meta;
    })
  );

  return chapters.sort((a, b) => {
    const aNum = a.chapterNumber ?? Number.POSITIVE_INFINITY;
    const bNum = b.chapterNumber ?? Number.POSITIVE_INFINITY;
    if (aNum !== bNum) return aNum - bNum;
    return (a.date ?? '').localeCompare(b.date ?? '');
  });
}

export async function getChapterBySlug(slug: string): Promise<Chapter | null> {
  const files = await readChapterFiles();
  const filename = files.find((f) => f.replace(/\.(md|mdx)$/, '') === slug);
  if (!filename) return null;

  const fullPath = path.join(chaptersDir, filename);
  const raw = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(raw);

  const title = toStringOrUndefined(data.title) ?? slug;
  const chapterNumber = toNumberOrUndefined(data.chapterNumber);
  const date = toStringOrUndefined(data.date);
  const summary = toStringOrUndefined(data.summary);
  const status = toStringOrUndefined(data.status);
  const tags = toStringArrayOrUndefined(data.tags);
  const coverImage = toStringOrUndefined(data.coverImage);

  return {
    slug,
    title,
    chapterNumber,
    date,
    summary,
    status,
    tags,
    coverImage,
    content,
  };
}
