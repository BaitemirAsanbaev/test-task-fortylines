import { useEffect, useState } from "react";
import { favsOnly, filterByCategory, search } from "../../store/slices/productSlice";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCategories } from "../../store/services/categoryService";
import classes from "./Adjustment.module.scss";
import full from "/full.svg";
import empty from "/empty.svg";

export function Adjustment() {
  const [target, setTarget] = useState<string>("");
  const [filter, setFilter] = useState<string>("*");
  const [favs, setFavs] = useState<boolean|string>("*");

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.products.categories);

  const handleFavChange = (
    _event: React.MouseEvent<HTMLElement>,
    isFavs: boolean | null
  ) => {
    if (isFavs !== null) {
      setFavs(isFavs);
      dispatch(favsOnly(isFavs))
    }
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className={classes.Adjustment}>
      <div>
        <FormControl>
          <ToggleButtonGroup exclusive value={favs} onChange={handleFavChange}>
            <ToggleButton value={true} aria-label="favourites only">
              <img src={full} alt="fav" />
            </ToggleButton>
            <ToggleButton value={false} aria-label="all">
              <img src={empty} alt="fav" />
            </ToggleButton>
            <ToggleButton value={"*"} aria-label="all">
              <b>All</b>
            </ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <InputLabel id="filter-label">Filter</InputLabel>
          <Select
            labelId="filter-label"
            id="filter"
            value={filter}
            label="Filter"
            onChange={(e) => {
              setFilter(e.target.value.toString());
            }}
          >
            <MenuItem value={"*"}>All</MenuItem>
            {categories.map((c) => {
              return (
                <MenuItem key={c.id} value={c.name}>
                  {c.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <button
          className={classes.btn}
          onClick={() => dispatch(filterByCategory(filter))}
        >
          Apply
        </button>
      </div>

      <div>
        <TextField
          id="filled-basic"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          label="Search"
          variant="filled"
        />
        <button
          className={classes.btn}
          onClick={() => dispatch(search(target))}
        >
          Search
        </button>
      </div>
    </div>
  );
}
