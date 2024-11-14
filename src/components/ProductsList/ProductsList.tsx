import { useEffect } from "react";
import { IProduct } from "../../models/Product";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Product } from "../Product/Product";
import classes from "./PriductList.module.scss";
import { fetchProducts } from "../../store/services/productService";
export function ProductList() {
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [])
  const products: IProduct[] = useAppSelector(
    (state) => state.products.products
  );
  return (
    <div className={classes.ProductList}>
      {products.map((product) => {
        return <Product key={product.id} data={product} />;
      })}
    </div>
  );
}
