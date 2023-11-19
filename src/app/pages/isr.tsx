import Link from "next/link";
import { getProducts, Product } from "@/service/products";

type Props = {
  products: Product[];
};

export default function SSGPage({ products }: Props) {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 10,
  };
}
