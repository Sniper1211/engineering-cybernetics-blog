import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Markdown } from '@/components/markdown';
import { getAllChapters, getChapterBySlug } from '@/lib/content';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const chapters = await getAllChapters();
  return chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const chapter = await getChapterBySlug(params.slug);
  if (!chapter) return {};
  return {
    title: `${chapter.title} - 工程控制论学习笔记`,
    description: chapter.summary,
  };
}

export default async function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = await getChapterBySlug(params.slug);
  if (!chapter) notFound();

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between gap-4">
        <Button variant="ghost" asChild>
          <Link href="/chapters">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回章节列表
          </Link>
        </Button>
      </div>

      <header className="mt-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">{chapter.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {typeof chapter.chapterNumber === 'number' ? <span>第 {chapter.chapterNumber} 章</span> : null}
            {chapter.date ? <span>{chapter.date}</span> : null}
            {chapter.status ? <span>{chapter.status}</span> : null}
          </div>
        </div>
      </header>

      <div className="mt-8">
        <Markdown content={chapter.content} />
      </div>
    </div>
  );
}
