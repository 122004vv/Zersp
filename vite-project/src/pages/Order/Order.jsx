import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;
  return (
    <Layout>
      {loading && <Loader />}
      <h1
        className="mb-2 mt-2 text-center text-2xl font-bold"
        style={{
          color: mode === "dark" ? "white" : "",
        }}
      >
        My Orders
      </h1>
      {order.length > 0 ? (
        <>
          <div className=" h-full pt-10">
            {order
              .filter((obj) => obj.userid == userid)
              .map((order, index) => {
                // order.cartItems.map()
                return (
                  <div
                    className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
                    key={index}
                  >
                    {order.cartItems.map((item, index) => {
                      return (
                        <div className="rounded-lg md:w-2/3" key={index}>
                          <div
                            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                            style={{
                              backgroundColor: mode === "dark" ? "#282c34" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <img
                              src={item.imageUrl}
                              alt="product-image"
                              className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div className="mt-5 sm:mt-0">
                                <h2
                                  className="text-lg font-bold text-gray-900"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.title}
                                </h2>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.description}
                                </p>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <h2
          className=" text-center tex-6xl"
          style={{ color: mode === "dark" ? "white" : "black" }}
        >
          No Orders Yet , Let's go buy them{" "}
          <Link
            to={"/allproducts"}
            className="text-sm font-medium text-gray-700 "
            style={{ color: mode === "dark" ? "white" : "black" }}
          >
            Click here !
          </Link>
        </h2>
      )}
    </Layout>
  );
}
export default Order;
