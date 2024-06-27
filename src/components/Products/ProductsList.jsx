import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "../../Hook/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsList = () => {
  //서버에서 가져오는 데이터에는 제품데이터 및 페이지등 다른 데이터도 있음.
  const { data, error, isLoading } = useData("products");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>상품목록</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">정렬방법</option>
          <option value="price desc">가격높은순</option>
          <option value="price asc">가격낮은순</option>
          <option value="rate desc">평점높은순</option>
          <option value="rate asc">평점낮은순</option>
        </select>
      </header>

      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
        {data.products &&
          data.products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              rating={product.rating}
              ratingCounts={product.reviews.counts}
              stock={product.stock}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductsList;
