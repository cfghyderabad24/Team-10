import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/user/userSlice";
import { BACKEND_URL } from "../config";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postInputs, setPostInputs] = useState({
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      console.log(postInputs);
      const response = await axios.post(
        `${BACKEND_URL}/auth/signin`,
        postInputs
      );
      const { user, token } = response.data;
      // localStorage.setItem("token", token);
      dispatch(setLogin({ user, token }));
      navigate("/");
    } catch (e) {
      alert("Error while signing in");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="px-10">
          <div className="text-3xl font-extrabold">Sign in to your account</div>
          <div className="text-slate-500">
            Don't have an account?
            <Link className="pl-2 underline" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
        <div className="pt-8 px-10">
          <LabelledInput
            label="Email"
            placeholder="email@gmail.com"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="123456"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <Button
            onClick={sendRequest}
            type="button"
            gradientDuoTone="purpleToPink"
            className="mt-8 w-full text-white focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

function LabelledInput({ label, placeholder, onChange, type }) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
