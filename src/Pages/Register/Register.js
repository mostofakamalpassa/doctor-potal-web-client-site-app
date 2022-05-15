import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

    
  return (
    <div className="flex justify-center items-center min-h-[82vh]">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("userName", { required: true })}
              className="input input-bordered w-full max-w-xs my-6"
              placeholder="Your full  name "
            />
            {errors.userName?.type === "required" && (
              <p className="text-red-500">User name is required</p>
            )}

            
            <input
              {...register("email", { required: true })}
              className="input input-bordered w-full max-w-xs my-6"
              placeholder="Enter Your Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}



            <input
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })} placeholder="password"
            />
            {errors.password && (
              <p className="text-red-500"> Password is required </p>
            )}
            <div className="card-actions justify-center">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary text-white my-6"
              />
            </div>
          </form>

          <p>
            You  have a account{" "}
            <small className="text-primary"><Link to='/login'>Login</Link></small>
          </p>
          <div className="divider">OR</div>

          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}
          >
            Continue with Google
          </button>
          <button className="btn btn-outline">Continue with Github</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
