import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import { fireDB } from "../../firebase/FirebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { toast } from "react-toastify";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);
  const [newProducts, setNewProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  const [allProducts, setAllProducts] = useState([]);

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "orders"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false);
      });
      setOrder(ordersArray);
      //console.log(ordersArray)
      setLoading(false);
    } catch (error) {
     // console.log(error);
      setLoading(false);
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const addProduct = async (product) => {
    try {
      setLoading(true);
      await addDoc(collection(fireDB, "products"), product);
      toast.success("Product added successfully");
      getProductData();
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error adding product: ", error);
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (productId, updatedProduct) => {
    try {
      setLoading(true);
      await setDoc(doc(fireDB, "products", productId), updatedProduct);
      toast.success("Product updated successfully");
      getProductData();
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error updating product: ", error);
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", productId));
      toast.success("Product deleted successfully");
      getProductData();
    } catch (error) {
      console.error("Error deleting product: ", error);
      toast.error("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };
  const getProductData = async () => {
    setLoading(true);
    try {
      onSnapshot(collection(fireDB, "products"), (querySnapshot) => {
        const productsArray = [];
        querySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setAllProducts(productsArray);
      });
    } catch (error) {
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const [user, setUser] = useState([]);

  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  const getUserData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false);
      });
      setUser(usersArray);
      //console.log(usersArray);
      setLoading(false);
    } catch (error) {
      //console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        newProducts,
        setNewProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        allProducts,
        setAllProducts,
        order,
        getOrderData,
        user,
        getUserData,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
