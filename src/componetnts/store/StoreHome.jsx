import React, { useEffect, useState } from "react";
import StoreData from "./StoreData";
import Product from "./Product";
import Button from "./Button";
import Cart from "./Cart";
import ReactGA from 'react-ga';


function StoreHome() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setItems(Object.values(StoreData));
    }
    fetchData();
  }, []);

  const filterItems = (e) => {
    const newItems = StoreData.filter((newval) => newval.category === e);
    setItems(newItems);
  };
  
// add E-commerce tracking code
  return (
    <>

      <div>
        <div>
          <Button
            menuItem={StoreData}
            filterItems={filterItems}
            setItems={setItems}
          />
          <Product item={items} />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default StoreHome;
