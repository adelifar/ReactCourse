import Link from "next/link";

const ProductPage = () => {
  return (
    <>
      <h1>This is Product page</h1>
      <ul>
        <li><Link href="/product/pencil" >Pencil</Link>       </li>
        <li><Link href="/product/notebook">Notebook</Link></li>
      </ul>
    </>
  );
};
export default ProductPage;
