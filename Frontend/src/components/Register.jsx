import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Register = () => {
  // const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState({
    mobileNumber: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    console.log(postInputs);
    try {
      await axios.post(
        `${BACKEND_URL}/auth/signup`,
        postInputs
      );
      // const jwt = response.data;
    } catch (e) {
      alert("Error while signing up");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="px-10">
          <div className="text-3xl font-extrabold">Create an account</div>
          <div className="text-slate-500">
            Already have an account?
            <Link className="pl-2 underline" to="/signin">
              Sign in
            </Link>
          </div>
        </div>
        <div className="pt-8 px-10">
          <LabelledInput
            label="Mobile Number:"
            placeholder="Enter your mobile number"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                mobileNumber: Number(e.target.value),
              });
            }}
          />
          <LabelledInput
            label="Email"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
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
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

function LabelledInput({ label, placeholder, onChange, type }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm text-black font-semibold">
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
