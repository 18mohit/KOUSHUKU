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
useEffect(() => {
  // Track the view_item event when the component mounts
  window.dataLayer.push({
    event: "view_item",
    ecommerce: {
      currency: "USD",
      value: 30.03,
      items: [
        {
          item_id: "1",
          item_name: "Girls karate uniform",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 199,
          quantity: 3
        }
      ]
    }
  });
}, []);


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
