export interface ArticleProps {
  id: number;
  title: string;
  image: null | File;
  content: string;
}
export interface ArticlesProps {
  id: number;
  title: string;
  image: string | undefined;
  content: string;
}
