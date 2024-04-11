import ArticleLink from './ArticleLink';
const links = [
  { title: 'لوازم آرایشی', image: './images/articles/01.jpg' },
  { title: 'مراقبت از مو', image: './images/articles/02.jpg' },
  { title: 'مراقبت از پوست', image: './images/articles/03.jpg' },
  { title: 'محصولات کودک', image: './images/articles/04.jpg' },
];

function Articles() {
  return (
    <div className="container grid grid-cols-1 gap-5 pt-5 md:grid-cols-2 lg:grid-cols-4">
      {links.map((link, index) => (
        <ArticleLink key={index} link={link} />
      ))}
    </div>
  );
}

export default Articles;
