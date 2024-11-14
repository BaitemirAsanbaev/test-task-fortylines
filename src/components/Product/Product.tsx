import { IProduct } from "../../models/Product";
import classes from "./Product.module.scss";
import full from "./../../assets/full.svg";
import empty from "../../assets/empty.svg";
import { useAppDispatch } from "../../store/hooks";
import { toggleFav } from "../../store/services/productService";
export interface IProductProps {
  data: IProduct;
}

export function Product({ data }: IProductProps) {
  const dispatch = useAppDispatch();
  function clickFav(){
    dispatch(toggleFav(data.id))

  }
  return (
    <div className={classes.Product}>
      <img src={data.image} />

      <div className={classes.info}>
        <small>#{data.id}</small>
        <h2>{data.name}</h2>
        <span className={classes.category}>{data.category.name}</span>
        <p>{data.description}</p>
        <div className={classes.card_bottom}>
          <img
          onClick={clickFav}
            className={classes.heart}
            src={data.isFav ? full : empty}
            alt={data.isFav ? "remove from favourite" : "add to favourite"}/>
          <span className={classes.price}>{data.price}$</span>
        </div>
      </div>
    </div>
  );
}
