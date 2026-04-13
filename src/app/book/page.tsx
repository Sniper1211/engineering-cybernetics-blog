import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Markdown } from '@/components/markdown';
import { getAllChapters, getChapterBySlug } from '@/lib/content';

export const dynamic = 'force-static';

export default async function BookPage() {
  const metas = await getAllChapters();
  const chapters = await Promise.all(metas.map((m) => getChapterBySlug(m.slug)));
  const validChapters = chapters.filter((c): c is NonNullable<typeof c> => c !== null);

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
        <h1 className="text-3xl font-bold tracking-tight">合订阅读</h1>
        <p className="mt-2 text-muted-foreground">
          将所有章节按顺序合并展示，适合连续阅读与最终回顾。
        </p>
      </header>

      <div className="mt-8 grid gap-3 rounded-lg border bg-card p-4">
        <div className="text-sm font-medium">目录</div>
        <div className="grid gap-2 text-sm">
          {validChapters.map((chapter) => (
            <a
              key={chapter.slug}
              href={`#${chapter.slug}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {chapter.chapterNumber ? `第${chapter.chapterNumber}章` : '章节'} · {chapter.title}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-16">
        {validChapters.map((chapter) => (
          <section key={chapter.slug} id={chapter.slug} className="scroll-mt-20">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-muted-foreground">
                {chapter.chapterNumber ? `第${chapter.chapterNumber}章` : '章节'} {chapter.date ? `· ${chapter.date}` : ''}
              </div>
              <h2 className="text-2xl font-bold tracking-tight">{chapter.title}</h2>
            </div>
            <div className="mt-6">
              <Markdown content={chapter.content} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
