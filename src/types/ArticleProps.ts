export interface ArticleProps {
  id: number;
  title: string;
  image: string | File | null | undefined;
  content: string;
}
