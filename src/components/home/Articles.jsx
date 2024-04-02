import ArticleLink from "./ArticleLink";

function Articles() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
      <ArticleLink image="./images/articles/01.jpg" />
      <ArticleLink image="./images/articles/02.jpg" />
      <ArticleLink image="./images/articles/03.jpg" />
      <ArticleLink image="./images/articles/04.jpg" />
    </div>
  );
}

export default Articles;
