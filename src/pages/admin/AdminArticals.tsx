import { ReactNode } from 'react';
import AdminAddArticle from '../../components/admin/admin-articles/AdminAddArticle';
import AdminDeleteProduct from '../../components/admin/admin-products/AdminDeleteProduct';
import AdminUpdateProduct from '../../components/admin/admin-products/AdminUpdateProduct';
import useArticles from '../../features/articles/useArticles';

interface StyledDivProps {
  children?: ReactNode;
  style: string;
  content?: string;
}

const StyledDiv = ({ children, style, content }: StyledDivProps) => {
  return (
    <div className={`border-r p-1 text-center font-vazirBold ${style}`}>
      {content}
      {children}
    </div>
  );
};

function AdminArticals() {
  const { articles } = useArticles();
  const articlesList = articles?.slice().sort((a, b) => b.id - a.id);

  return (
    <div className="bg-stone-100 py-10 dark:bg-stone-700 dark:text-white max-md:col-span-12 md:col-span-9 lg:col-span-10">
      <div className="border p-5 shadow-md sm:mx-10 ">
        <h2 className="mb-10 font-vazirBold text-xl text-stone-700 dark:text-white">
          لیست مقالات
        </h2>
        <AdminAddArticle />

        {/* Article list heading */}
        <div className="grid grid-cols-12 bg-stone-400 text-stone-100 dark:bg-stone-700">
          <StyledDiv style="col-span-1 border" content="ID" />
          <StyledDiv
            style="col-span-3 border max-sm:col-span-7"
            content="نام مقاله"
          />
          <StyledDiv
            style="col-span-2 border max-sm:hidden"
            content="متن مقاله"
          />
          <StyledDiv
            style="col-span-2 border max-sm:hidden"
            content="آدرس پوستر مقاله"
          />
          <StyledDiv style="col-span-2 border" content="ویرایش" />
          <StyledDiv style="col-span-2 border" content="حذف" />
        </div>

        {/* Products list */}
        {articlesList?.map((article) => (
          <div
            key={article.id}
            className="grid grid-cols-12 items-center border-b bg-white dark:bg-stone-600 dark:text-stone-200"
          >
            <StyledDiv style="col-span-1" content={String(article.id)} />
            <StyledDiv
              style="col-span-3 text-right max-sm:col-span-7 text-sm"
              content={article.title}
            />
            <StyledDiv
              style="col-span-2 max-sm:hidden"
              content={article.content}
            />
            <StyledDiv
              style="col-span-2 max-sm:hidden"
              content={article.image}
            />
            <StyledDiv style="col-span-2 sm:p-3">
              <AdminUpdateProduct name={article?.title} />
            </StyledDiv>
            <StyledDiv style="col-span-2 sm:p-3">
              <AdminDeleteProduct id={article?.id} />
            </StyledDiv>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminArticals;
