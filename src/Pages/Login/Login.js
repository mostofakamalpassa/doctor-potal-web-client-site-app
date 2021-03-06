import React from "react";
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
const Login = () => {
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ]  = useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signInWithGoogle(email, password);

    if (error || googleError) {
      return (
        <div>
          <p className="text-red-500">Error: {error.message}</p>
        </div>
      );
    }

    if (loading || googleLoading) {
      return <Loading></Loading>
    }

    if(user || googleUser){
      navigate('/')
    }
  };
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  if (googleLoading) {
    <Loading></Loading>;
  }

  return (
    <div className="flex justify-center items-center min-h-[82vh]">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full max-w-xs my-6"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500"> Password is required </p>
            )}
            <div className="card-actions justify-center">
              <input
                type="submit"
                value="Login"
                className="btn btn-primary text-white my-6"
              />
            </div>
          </form>

          <p>
            You do not have account{" "}
            <small className="text-primary">
              <Link to="/register">Create account</Link>
            </small>
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

export default Login;
