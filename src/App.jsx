import { useState, useEffect } from "react";
import "./App.css";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import axios from "axios";


function App() {
 
    const [dataProducts, setDataProduct] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);

    
    const getDataProducts = () => {
        axios
            .get("https://products-crud.academlo.tech/products/")
            .then((resp) => setDataProduct(resp.data))
            .catch((error) => console.error(error));
    };
    useEffect(() => {
        getDataProducts();
    }, []);

    ///create Product
    const createProduct = (data) => {
        axios
            .post("https://products-crud.academlo.tech/products/", data)
            .then(() => getDataProducts())
            .catch((error) => console.error(error));
    };
    // delete Product
    const deleteProduct = (id) => {
        axios
            .delete(`https://products-crud.academlo.tech/products/${id}/`)
            .then(() => getDataProducts())
            .catch((error) => console.error(error));
    };
    // edit Product
    const editProduct = (dataProduct) => {
        setProductToEdit(dataProduct);
    };
    const modifiedProduct = (modifiedData) => {
        axios
            .put(
                `https://products-crud.academlo.tech/products/${modifiedData.id}/`,
                modifiedData
            )
            .then(() => getDataProducts())
            .catch((error) => console.error(error));
        setProductToEdit(null);
    };
    return (
        <div className="App">
        
            <ProductsForm
                createProduct={(data) => createProduct(data)}
                productSelectToEdit={productToEdit}
                modifiedProduct={(modifiedData) =>
                modifiedProduct(modifiedData)
                }
            />
            
            
         
            <ProductsList
                dataApi={dataProducts}
                deleteProduct={(id) => deleteProduct(id)}
                editProduct={(dataProduct) => editProduct(dataProduct)}
            />
         
        </div>
    );
}

export default App;