import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: '系统化学习',
      description: '按《工程控制论》18章结构，系统学习钱学森控制论思想。',
    },
    {
      icon: Brain,
      title: '深度思考',
      description: '每章包含理论理解、思考笔记、应用方案三个层次。',
    },
    {
      icon: TrendingUp,
      title: 'AI进化应用',
      description: '探索控制论在AI助手进化中的实际应用方案。',
    },
    {
      icon: Users,
      title: '学习社区',
      description: '开放的学习过程，欢迎交流讨论和共同进步。',
    },
  ];

  const chapters = [
    {
      number: 1,
      title: '引言 - 线性系统与非线性系统',
      status: '已完成',
      date: '2026-04-13',
      summary: '理解系统分类，建立AI助手控制系统模型。',
    },
    {
      number: 2,
      title: '拉氏变换法',
      status: '进行中',
      date: '2026-04-14',
      summary: '掌握系统分析的数学工具，应用于AI进化分析。',
    },
    {
      number: 3,
      title: '不互相影响的控制',
      status: '计划中',
      date: '2026-04-15',
      summary: '学习解耦控制，设计独立的AI技能进化机制。',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              工程控制论
              <span className="block text-cybernetics-primary">学习笔记与AI进化应用</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              系统学习钱学森《工程控制论》，探索控制论在AI助手进化中的应用。
              记录学习过程，沉淀知识思考，设计进化方案。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/chapters">
                  开始学习
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/Sniper1211/engineering-cybernetics-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub仓库
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              项目特色
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              不仅仅是学习笔记，更是学习方法论的创新实践
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-cybernetics-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cybernetics-primary/10">
                    <feature.icon className="h-6 w-6 text-cybernetics-primary" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              学习进度
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              按《工程控制论》章节系统学习，持续更新中
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter) => (
              <Card key={chapter.number} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-cybernetics-primary/10 px-3 py-1 text-sm font-medium text-cybernetics-primary">
                      第{chapter.number}章
                    </span>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                      chapter.status === '已完成' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : chapter.status === '进行中'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                    }`}>
                      {chapter.status}
                    </span>
                  </div>
                  <CardTitle className="mt-4 group-hover:text-cybernetics-primary transition-colors">
                    {chapter.title}
                  </CardTitle>
                  <CardDescription>{chapter.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{chapter.summary}</p>
                  <Button variant="ghost" className="mt-4 w-full" asChild>
                    <Link href={`/chapters/${chapter.number}`}>
                      查看详情
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/chapters">
                查看所有章节
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              开始你的控制论学习之旅
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              无论是学习钱学森的控制论思想，还是探索AI进化应用，
              这里都有系统的学习资源和思考记录。
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/chapters">
                  立即开始学习
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
