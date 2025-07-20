import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username or password");
    }
  };
  return (
    <div>
      <h2>Login Page</h2>

      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              placeholder="username"
              value={formData.username}
              required
            />
          </div>
          <div>
            <label htmlFor="password">password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="password"
              value={formData.password}
              required
            />
          </div>
          <button type="submit">Submit</button>
          {message && <p>{message}</p>}
        </form>
      )}
      {isLoggedIn && <p>Welcome, user!</p>}
    </div>
  );
}

export default App;
