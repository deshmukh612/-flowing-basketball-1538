import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/ProductReducer/action";
import "./Product.css";

const FilterChicken = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearhParams] = useSearchParams();

  const urlCategory = searchParams.getAll("category");


  const [category, setCategory] = useState(urlCategory || []);

  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      setSearhParams({ category: category });
      dispatch(getBooks("chicken", { params: { category } }));
    }
  }, [category, dispatch, setSearhParams]);

  return (
    <div>      
      <div className="prosort">
        <div className="sortdiv">
          <input          
            type="checkbox"
            onChange={handleCheckbox}
            value="CurryCuts"
            defaultChecked={category.includes("CurryCuts")}
          />
          <label className="inp">Curry Cuts</label>
        </div>
        <div className="sortdiv">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Boneless"
            defaultChecked={category.includes("Boneless")}
          />
          <label className="inp">Boneless & Mince</label>
        </div>
        <div className="sortdiv">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="SpecialityCuts"
            defaultChecked={category.includes("SpecialityCuts")}
          />
          <label className="inp">Speciality Cuts</label>
        </div>
        <div className="sortdiv">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Offals"
            defaultChecked={category.includes("Offals")}
          />
          <label className="inp">Offals</label>
        </div>
        <div className="sortdiv">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Combos"
            defaultChecked={category.includes("Combos")}
          />
          <label className="inp">Combos</label>
        </div>
      </div>
    </div>
  );
};

export default FilterChicken;
