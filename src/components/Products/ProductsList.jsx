import "./ProductsList.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";

const ProductsList = () => {
  //제품들 데이터
  const [products, setProducts] = useState([]);
  //에러메세지
  const [error, setError] = useState("");
  //처음 시작시 제품데이터를 가져옴
  useEffect(() => {
    apiClient
      .get("/products") //Get으로 요청 기본주소+/products
      .then((res) => setProducts(res.data.products)) //결과를 업데이트
      .catch((err) => setError(err)); //에러발생시 업데이트
  }, []);

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsList;
