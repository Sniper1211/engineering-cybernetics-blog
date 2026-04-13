import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cybernetics-primary text-primary-foreground">
                <span className="text-lg font-bold">工</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">工程控制论学习笔记</h3>
                <p className="text-sm text-muted-foreground">
                  钱学森思想与AI进化应用
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              系统学习《工程控制论》，探索控制论在AI助手进化中的应用。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">学习内容</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/chapters"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  章节学习
                </Link>
              </li>
              <li>
                <Link
                  href="/notes"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  学习笔记
                </Link>
              </li>
              <li>
                <Link
                  href="/applications"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI进化应用
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  关于项目
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">资源链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Sniper1211/engineering-cybernetics-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub仓库
                </a>
              </li>
              <li>
                <a
                  href="https://baike.baidu.com/item/%E5%B7%A5%E7%A8%8B%E6%8E%A7%E5%88%B6%E8%AE%BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  百度百科：工程控制论
                </a>
              </li>
              <li>
                <a
                  href="https://zh.wikipedia.org/wiki/%E5%B7%A5%E7%A8%8B%E6%8E%A7%E5%88%B6%E8%AE%BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  维基百科：工程控制论
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">联系与反馈</h4>
            <p className="text-sm text-muted-foreground">
              如有建议或问题，欢迎通过以下方式联系：
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Sniper1211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <button
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="发送邮件"
                onClick={() => window.location.href = 'mailto:your-email@example.com'}
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} 工程控制论学习笔记。本项目基于学习目的创建。
          </p>
          <p className="mt-2">
            内容基于钱学森《工程控制论》及相关资料整理，仅供学习参考。
          </p>
        </div>
      </div>
    </footer>
  );
}
