import { IProduct } from "../../models/Product";
import { useAppSelector } from "../../store/hooks";
import { Product } from "../Product/Product";
import classes from './PriductList.module.scss'
export function ProductList () {
    const products:IProduct[] = useAppSelector(state=>state.products.products)
  return (
    <div className={classes.ProductList}>
      {products.map(product=>{
        return<Product key={product.id} data={product}/>
      })}
    </div>
  );
}
