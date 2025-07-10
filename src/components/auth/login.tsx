import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/index"; // firebase auth config
import { useAuthState } from "../../store/auth-store";
import { Button } from "../ui/button";

const Login = () => {
  const { setAuth } = useAuthState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (email === "admin@gmail.com" && password === "admin1234") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        setErrorMsg("Akkount mavjud emas.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMsg("Parol noto‘g‘ri.");
      } else {
        setErrorMsg("Xatolik yuz berdi: " + error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-[#1b4571]">
      <div className=" shadow-xl rounded-xl p-8 w-[90%] max-w-md">
        <h1 className="text-xl font-bold ">Login</h1>
        <p className="text-muted-foreground">
         Don't have an account?{""}{" "}
          <span
            className="text-[#1b4571] cursor-pointer hover:underline"
            onClick={() => setAuth("register")}
          >
            Sign Up{" "}
          </span>
        </p>

        {errorMsg && (
          <p className="text-red-600 text-center mb-4 font-medium">
            {errorMsg}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="flex items-center border rounded px-3 py-2">
            <Mail className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="email"
              placeholder="admin@gmail.com"
              className="flex-1 outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Parol
          </label>
          <div className="flex items-center border rounded px-3 py-2">
            <Lock className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="password"
              placeholder="Parolni kiriting"
              className="flex-1 outline-none  bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <Button
          onClick={handleLogin}
          className="w-full bg-[#1b4571] text-white font-semibold py-2 rounded  transition duration-200"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
