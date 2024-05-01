import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";


import Header from "./components/Header";
import Homepage from "./components/HomepageBody";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Data from "./pages/Data";
import MyData from './pages/MyData';

function App() {
    const { loading: categoriesLoading, error: categoriesError, data: categoriesData } = useQuery(GET_CATEGORIES);
    const { loading: itemsLoading, error: itemsError, data: itemsData } = useQuery(GET_ITEMS);

    if (categoriesLoading || itemsLoading) return <p>Loading...</p>;
    if (categoriesError || itemsError) return <p>Error: {categoriesError?.message || itemsError?.message}</p>;

    return (
        <div className="main-container">
            <BrowserRouter>
                <Header />
                <div className="pages">
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        {categoriesData.categories.map((categoryItem, index) => {
                            return (
                                <Route
                                    path={categoryItem.link}
                                    element={
                                        <CategoryPage
                                            categoryName={categoryItem.name}
                                            categoryId={categoryItem._id}
                                        />
                                    }
                                ></Route>
                            );
                        })}
                        {itemsData.items.map((item) => (
                            <Route
                                key={item._id}
                                path={`items/${item._id}`}
                                element={<ShopByItem itemName={item.name} itemPrice={item.price} itemDescription={item.description} itemId={item._id} />}
                            />
                        ))}

                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<Signup />} />
                        <Route path="/post-item" element={<PostItem />} />
                        <Route path="/post-order" element={<PostOrder />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
