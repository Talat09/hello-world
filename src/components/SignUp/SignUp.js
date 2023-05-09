import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updatedInfo, googleLogin, loading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const updatedUser = {
          displayName: data?.name,
          photoURL: data?.photoURL,
        };
        updatedInfo(updatedUser)
          .then(() => {
            console.log(data.email, data.name);
            navigate(from, { replace: true });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  if (loading) {
    <Loading></Loading>;
  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="border-dotted border-2 border-primary p-8 rounded">
        <h1 className="font-bold text-center text-4xl text-primary">Sign Up</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered w-full max-w-xs"
              {...register("photoURL")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary w-full max-w-xs mt-6"
          />
        </form>
        <p>
          Already Have an account?{" "}
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>

          <button className="btn btn-primary" onClick={handleGoogleLogin}>
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
