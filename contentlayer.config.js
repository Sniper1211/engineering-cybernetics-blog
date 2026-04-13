import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  url: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

// 章节文档类型
export const Chapter = defineDocumentType(() => ({
  name: 'Chapter',
  filePathPattern: 'chapters/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
      description: '章节标题',
    },
    chapterNumber: {
      type: 'number',
      required: true,
      description: '章节编号',
    },
    date: {
      type: 'date',
      required: true,
      description: '学习日期',
    },
    summary: {
      type: 'string',
      required: true,
      description: '章节摘要',
    },
    status: {
      type: 'enum',
      options: ['planned', 'in-progress', 'completed'],
      default: 'planned',
      description: '学习状态',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      default: [],
      description: '标签',
    },
    coverImage: {
      type: 'string',
      description: '封面图片',
    },
  },
  computedFields,
}));

// 学习笔记类型
export const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: 'notes/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    type: {
      type: 'enum',
      options: ['theory', 'application', 'reflection', 'summary'],
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      default: [],
    },
    relatedChapter: {
      type: 'number',
      description: '相关章节编号',
    },
  },
  computedFields,
}));

// 应用案例类型
export const Application = defineDocumentType(() => ({
  name: 'Application',
  filePathPattern: 'applications/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    category: {
      type: 'enum',
      options: ['ai-evolution', 'system-design', 'practical-case'],
      required: true,
    },
    difficulty: {
      type: 'enum',
      options: ['beginner', 'intermediate', 'advanced'],
      default: 'intermediate',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      default: [],
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Chapter, Note, Application],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
