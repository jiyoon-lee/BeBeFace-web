import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "@/service/products";

export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 보여줍니다.
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com");
  const data = await res.json();
  const factText = await data.data[0];
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
