import React from "react";
import Layout from "../../components/layout/Layout";
import Filter from "../../components/filter/Filter";
import myContext from "../../context/data/myContext";
import { useContext } from "react";
import ProductCard from "../../components/productCard/ProductCard";

function AllProducts() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Layout>
      <h1
        className="mb-2 mt-2 text-center text-2xl font-bold"
        style={{
          color: mode === "dark" ? "white" : "",
        }}
      >
        All Products
      </h1>
      <Filter />
      <ProductCard />
    </Layout>
  );
}

export default AllProducts;
