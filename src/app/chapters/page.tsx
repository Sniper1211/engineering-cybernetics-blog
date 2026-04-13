import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllChapters } from '@/lib/content';

export const dynamic = 'force-static';

function statusLabel(status?: string) {
  if (!status) return '未知';
  if (status === 'completed') return '已完成';
  if (status === 'in-progress') return '进行中';
  if (status === 'planned') return '计划中';
  return status;
}

function statusClassName(status?: string) {
  if (status === 'completed') return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
  if (status === 'in-progress') return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
  if (status === 'planned') return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
}

export default async function ChaptersPage() {
  const chapters = await getAllChapters();

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">章节学习</h1>
        <p className="text-muted-foreground">
          所有内容均来自仓库里的 Markdown 文件，按章节编号自动排序。
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <Card key={chapter.slug} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-cybernetics-primary/10 px-3 py-1 text-sm font-medium text-cybernetics-primary">
                  {chapter.chapterNumber ? `第${chapter.chapterNumber}章` : '章节'}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${statusClassName(chapter.status)}`}
                >
                  {statusLabel(chapter.status)}
                </span>
              </div>
              <CardTitle className="mt-4 group-hover:text-cybernetics-primary transition-colors">
                {chapter.title}
              </CardTitle>
              <CardDescription>{chapter.date}</CardDescription>
            </CardHeader>
            <CardContent>
              {chapter.summary ? (
                <p className="text-muted-foreground">{chapter.summary}</p>
              ) : null}
              <Button variant="ghost" className="mt-4 w-full" asChild>
                <Link href={`/chapters/${chapter.slug}`}>
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <Button variant="outline" size="lg" asChild>
          <Link href="/book">
            合订阅读
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
