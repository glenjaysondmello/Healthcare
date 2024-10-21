import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login", // Backend API endpoint
        {
          email: data.email,
          password: data.password,
        }
      );

      // Assuming the response contains a token or user data:
      const { token } = response.data;

      // Save the token in localStorage or use context/state management
      localStorage.setItem("token", token);

      // Navigate to the home page after successful login
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center">
        <img
          className=""
          src="src/assets/images/login.png"
          alt="Healthcare"
          width="300"
          height="300"
        />
      </div>
      <div className="max-w-md mx-auto bg-gray-300 rounded-[40px] shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
            Login to Your Account
          </h2>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-[100px] rounded-xl h-[40px]"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/forgot-password"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="px-6 py-4">
              <p className="text-center text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-bold text-blue-500 hover:text-blue-800"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useAuth } from "../contexts/AuthContext";

// const schema = yup.object().shape({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup.string().required("Password is required"),
// });

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     setError(null);
//     setIsLoading(true);
//     try {
//       await login(data.email, data.password);
//       navigate("/");
//     } catch (error) {
//       console.error("Login error:", error);
//       setError("Invalid email or password. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex items-center justify-center">
//         <img
//           className=""
//           src="src/assets/images/login.png"
//           alt="Healthcare"
//           width="300"
//           height="300"
//         />
//       </div>
//       <div className="max-w-md mx-auto bg-gray-300 rounded-[40px] shadow-md overflow-hidden ">
//         <div className="px-6 py-8">
//           <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
//             Login to Your Account
//           </h2>
//           {error && (
//             <div
//               className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
//               role="alert"
//             >
//               <span className="block sm:inline">{error}</span>
//             </div>
//           )}
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 {...register("email")}
//                 className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs italic">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 {...register("password")}
//                 className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-xs italic">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>
//             <div className="flex items-center justify-center">
//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-[100px] rounded-xl h-[40px] "
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Loging " : "Login"}
//                 </button>
//               </div>
//             </div>
//             <div className="text-center">
//               <Link
//                 to="/forgot-password"
//                 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//               >
//                 Forgot Password?
//               </Link>
//             </div>
//             <div className="px-6 py-4">
//               <p className="text-center text-gray-600 text-sm">
//                 Don't have an account?{" "}
//                 <Link
//                   to="/register"
//                   className="font-bold text-blue-500 hover:text-blue-800"
//                 >
//                   Create Account
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
