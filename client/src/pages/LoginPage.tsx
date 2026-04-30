import { useState } from "react";
import "./loginBox.css";
import { useNavigate } from "react-router";

type LoginData = {
  username: string;
  password: string;
};
type User = {
  username: string;
  password: string;
};
type Users = User[];

const users: Users = [
  {
    username: "efi",
    password: "1234",
  },
];

function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLoginData((prevData: LoginData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const login = () => {
    const user = users.find(
      (user) =>
        user.username === loginData.username &&
        user.password === loginData.password,
    );
    if (user) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid username or password.");
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      <div className="login-box">
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleChange} />
        <button onClick={login}>Login</button>
      </div>
    </>
  );
}

export default LoginPage;
