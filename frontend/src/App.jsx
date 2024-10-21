import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HealthBot from "./pages/HealthBot";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/health-bot" element={<HealthBot />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import HealthBot from "./pages/HealthBot";
// import Footer from "./components/Footer";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route
//                 path="/health-bot"
//                 element={
//                   <PrivateRoute>
//                     <HealthBot />
//                   </PrivateRoute>
//                 }
//               />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
