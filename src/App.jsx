import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./store"; // Ensure this path is correct
import store from "./redux/store"
import ScrollToTop from "./components/ScrollToTop"; // Ensure this exists
import { Toaster } from "react-hot-toast";
import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";

// Importing Pages
import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </ErrorBoundary>
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
}


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import {
//   Home,
//   Product,
//   Products,
//   AboutPage,
//   ContactPage,
//   Cart,
//   Login,
//   Register,
//   Checkout,
//   PageNotFound,
// } from "./pages";
// import store from "./redux/store"

// export default function App(){
//   return(
//     <>
//     <BrowserRouter>
//         <ScrollToTop>
//           <Provider store={store}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/product" element={<Products />} />
//               <Route path="/product/:id" element={<Product />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/contact" element={<ContactPage />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/checkout" element={<Checkout />} />
//               <Route path="*" element={<PageNotFound />} />
//               <Route path="/product/*" element={<PageNotFound />} />
//             </Routes>
//           </Provider>
//         </ScrollToTop>
//         <Toaster />
//     </BrowserRouter>
//     </>
//   );
// }



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
