// Routes
import { Route, Routes } from "react-router-dom";

// Style
import "./App.css";

// Pages
import Home from "./routes/Home.jsx";
import ProductDetails from "./routes/ProductDetails.jsx";
import NotFound from "./routes/NotFound.jsx";
import Women from "./routes/Women.jsx";

// Layout
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="/checkout" element={<div>Checkout</div>} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="women" element={<Women />} />
                </Routes>
            </MainLayout>
        </>
    );
}

export default App;
