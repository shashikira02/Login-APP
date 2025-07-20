import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
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
            <label htmlFor="username">Username</label> 
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label> 
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="password"
            />
          </div>
          <button type="submit">Submit</button>

          {message === "Invalid username or password" && <p>{message}</p>}
        </form>
      )}

      {isLoggedIn && <p>{message}</p>}
    </div>
  );
}

export default App;
