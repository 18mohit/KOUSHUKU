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
  // Initialize ReactGA with your GA4 Measurement ID
  ReactGA.initialize('GA_MEASUREMENT_ID');
  // Track page view on component mount
  ReactGA.pageview(window.location.pathname + window.location.search);
}, []);

useEffect(() => {
  // Track ecommerce event when component updates or mounts
  ReactGA.event({
      category: 'Ecommerce',
      action: 'Purchase',
      transaction_id: 'T_12345',
      value: 72.05,
      currency: 'USD',
      items: [
        {
          id: '1',
          name: 'Girls karate uniform',
          category: 'Uniform',
          price: 199,
          quantity: 3,
          discount: 2.22
        },
        {
          id: '2',
          pname: 'Boys karate uniform',
          category: 'Uniform',
          price: 220,
          quantity: 2,
          discount: 3.33,
          promotion_id: 'P_12345',
          promotion_name: 'Summer Sale'
        }
      ]
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
