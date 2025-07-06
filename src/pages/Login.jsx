import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarAnimation from "../ui/CarAnimation";

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "passenger", // default user type for registration
  });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const user = users.find(
        (u) =>
          u.username === formData.username && u.password === formData.password
      );
      if (user) {
        setMessage(`Welcome back, ${user.username}!`);
        setTimeout(() => {
          if (user.userType === "passenger") {
            navigate("/app/findRide");
          } else if (user.userType === "driver") {
            navigate("/app/offerRide");
          }
        }, 1000);
      } else {
        setMessage("Invalid username or password.");
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }
      if (users.find((u) => u.username === formData.username)) {
        setMessage("Username already exists.");
        return;
      }

      const newUser = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        userType: formData.userType,
      };

      setUsers((prev) => [...prev, newUser]);

      setMessage("Signup successful. Please log in.");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "passenger",
      });
      setIsLogin(true);
    }
  };

  return (
    <main className="relative flex flex-col justify-start items-center min-h-screen pt-6 px-4 sm:px-6 md:px-8 bg-white">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-90">
        <CarAnimation />
      </div>

      <div className="relative z-10 bg-white bg-opacity-95 p-6 rounded-lg shadow-lg w-full max-w-md mt-10 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-900 text-center">
          {isLogin ? "Login to Raahi" : "Sign Up for Raahi"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />

          {!isLogin && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <div className="flex items-center space-x-4">
                <label className="text-cyan-900 font-semibold">Register as:</label>
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="userType"
                    value="passenger"
                    checked={formData.userType === "passenger"}
                    onChange={handleChange}
                  />
                  <span>Passenger</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="userType"
                    value="driver"
                    checked={formData.userType === "driver"}
                    onChange={handleChange}
                  />
                  <span>Driver</span>
                </label>
              </div>
            </>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-cyan-900 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          )}

          <button
            type="submit"
            className="w-full py-2 bg-cyan-900 text-white rounded-md hover:bg-cyan-800 transition text-base sm:text-lg"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm sm:text-base text-cyan-700 font-semibold">
            {message}
          </p>
        )}

        <div className="mt-4 text-center text-sm sm:text-base">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setIsLogin(false);
                  setMessage("");
                }}
                className="text-cyan-700 underline"
                type="button"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setIsLogin(true);
                  setMessage("");
                }}
                className="text-cyan-700 underline"
                type="button"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Login;
