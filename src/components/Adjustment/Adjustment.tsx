
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../store/slices/productSlice";
import { TextField } from "@mui/material";
export function Adjustment () {

  const [target, setTarget] = useState<string>("")
  const dispatch = useDispatch()
  return (
    <div>
      <TextField id="filled-basic" value={target} onChange={(e)=>setTarget(e.target.value)} label="Search" variant="filled"/>
      
      <button onClick={()=>dispatch(search(target))}>Search</button>
    </div>
  );
}
