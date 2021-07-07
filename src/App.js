import React, { useEffect, useState } from 'react'
import CustomerList from './Components/CustomerList'
import ProductsList from './Components/ProductsList'
import { getCustomer, getProducts, updateCustomer, updateProducts, deleteCustomer, deleteProducts } from './Services/InventoryService';

export default function App() {

/*** Customers State ***/
const [customer, setCustomer] = useState([]);
const [editCustomer, setEditCustomer] = useState(null);
const [isCustomerFormModalOpen, setIsCustomerFormModalOpen] = useState(false);

/*** Products State ***/
const [products, setProducts] = useState([]);
const [editProducts, setEditProducts] = useState(null);
const [isProductsFormModalOpen, setIsProductsFormModalOpen] = useState(false);

/*** Read Customers ***/
const refreshCustomer = async () => {
  const freshCustomer = await getCustomer();
  setCustomer((freshCustomer) ? freshCustomer : []);
}
useEffect(() => {
  refreshCustomer();
}, [])

/*** Read Products ***/
const refreshProducts = async () => {
  const freshProducts = await getProducts();
  setProducts((freshProducts) ? freshProducts : []);
}
useEffect(() => {
  refreshProducts();
}, [])

/*** Delete Customer ***/
const handleCustomerDelete = async (customer) => {
  await deleteCustomer(customer);
  refreshCustomer();
}
/*** Delete Products ***/
const handleProductsDelete = async (products) => {
  await deleteProducts(products);
  refreshProducts();
}
  //Create & Update


  //Modal??


  //Render
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row mb-3">
          <div className="col">
            <h2>Some Kind Of Text Will Go Here</h2>
          </div>
        </div>
      </div>
      <CustomerList
        customer={customer}
        onDelete={handleCustomerDelete}
        onEdit={handleCustomerEditStart}/>
      <ProductsList
        products={products}
        onDelete={handleProductsDelete}
        onEdit={handleProductsEditStart}/>
    </React.Fragment>
  )
}
