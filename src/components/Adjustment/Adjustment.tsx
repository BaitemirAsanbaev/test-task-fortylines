import { useEffect, useState } from "react";
import { filterByCategory, search } from "../../store/slices/productSlice";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCategories } from "../../store/services/categoryService";
export function Adjustment() {
  const [target, setTarget] = useState<string>("");
  const [filter, setFilter] = useState<string>("*");

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.products.categories);

  useEffect(()=>{
    dispatch(fetchCategories())
  }, [])

  return (
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
            return <MenuItem key={c.id} value={c.name}>{c.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <button onClick={()=>dispatch(filterByCategory(filter))}>Apply</button>

      <TextField
        id="filled-basic"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        label="Search"
        variant="filled"
      />
      <button onClick={() => dispatch(search(target))}>Search</button>
    </div>
  );
}
