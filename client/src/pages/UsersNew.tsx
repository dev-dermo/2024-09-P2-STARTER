import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../utils/auth.tsx";

function UsersNew() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formState.password !== formState.passwordConfirmation) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        const data = await response.json();
        auth.login(data.token);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            minLength={8}
          />
        </div>

        <div>
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <br />
          <input
            id="passwordConfirmation"
            type="password"
            name="passwordConfirmation"
            value={formState.passwordConfirmation}
            onChange={handleChange}
            minLength={8}
          />
        </div>

        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default UsersNew;
