import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getBooks } from '../Redux/ProductReducer/action';
import "./Product.css";

const FilterFish = () => {
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
        dispatch(getBooks("fish", { params: { category } }));
      }
    }, [category, dispatch, setSearhParams]);
  
    return (
      <div>
        
        <div className="prosort">
          <div className="sortdiv">
            <input          
              type="checkbox"
              onChange={handleCheckbox}
              value="Freshwater"
              defaultChecked={category.includes("Freshwater")}
            />
            <label className="inp">Freshwater</label>
          </div>
          <div className="sortdiv">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              value="Seawater"
              defaultChecked={category.includes("Seawater")}
            />
            <label className="inp">Seawater</label>
          </div>
          <div className="sortdiv">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              value="ReadytoCook"
              defaultChecked={category.includes("ReadytoCook")}
            />
            <label className="inp">ReadytoCook</label>
          </div>
          
        </div>
      </div>
    );
  };
  

export default FilterFish