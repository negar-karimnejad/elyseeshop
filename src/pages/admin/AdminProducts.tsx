import { ReactNode } from 'react';
import AdminAddProduct from '../../components/admin/AdminAddProduct';
import AdminDeleteProduct from '../../components/admin/AdminDeleteProduct';
import AdminUpdateProduct from '../../components/admin/AdminUpdateProduct';
import useProducts from '../../features/products/useProducts';

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

function AdminProducts() {
  const { products } = useProducts();
  const productsList = products?.slice().sort((a, b) => b.id - a.id);

  return (
    <div className="bg-stone-100 max-md:col-span-12 md:col-span-9 lg:col-span-10">
      <div className="mx-10 border p-5 shadow-md ">
        <h2 className="mb-10 font-vazirBold text-xl text-stone-700">
          لیست محصولات
        </h2>
        <AdminAddProduct />

        {/* Artical list heading */}
        <div className="grid grid-cols-12 bg-stone-400 text-stone-100 dark:bg-stone-700">
          <StyledDiv
            style="max-sm:col-span-2 col-span-1 border"
            content="شناسه"
          />
          <StyledDiv
            style="col-span-3 border max-sm:col-span-4"
            content="نام محصول"
          />
          <StyledDiv
            style="col-span-2 border max-sm:hidden"
            content="کد محصول"
          />
          <StyledDiv
            style="col-span-2 border max-sm:hidden"
            content="قیمت محصول"
          />
          <StyledDiv
            style="col-span-2 max-sm:col-span-3 border"
            content="ویرایش"
          />
          <StyledDiv
            style="col-span-2 max-sm:col-span-3 border"
            content="حذف"
          />
        </div>

        {/* Artical list */}
        {productsList?.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-12 items-center border-b bg-white"
          >
            <StyledDiv
              style="col-span-1 max-sm:col-span-2"
              content={String(product.id)}
            />
            <StyledDiv
              style="col-span-3 text-right max-sm:col-span-4 text-sm"
              content={product.name}
            />
            <StyledDiv
              style="col-span-2 max-sm:hidden"
              content={product.code}
            />
            <StyledDiv
              style="col-span-2 max-sm:hidden"
              content={`${product.price.toLocaleString()} تومان`}
            />
            <StyledDiv style="col-span-2 p-3 max-sm:col-span-3">
              <AdminUpdateProduct name={product?.name} />
            </StyledDiv>
            <StyledDiv style="col-span-2 p-3 max-sm:col-span-3">
              <AdminDeleteProduct id={product?.id} />
            </StyledDiv>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProducts;
