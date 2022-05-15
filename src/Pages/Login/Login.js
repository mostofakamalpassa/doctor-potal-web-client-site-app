import React from "react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  return (
    <div className="flex justify-center items-center min-h-[82vh]">
        <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })}  className="input input-bordered w-full max-w-xs my-6"/>
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input className="input input-bordered w-full max-w-xs" {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      <div  className="card-actions justify-center">
      <input  type="submit" value="Login" className="btn btn-primary text-white my-6" />
      </div>
    </form>
     
        
        


       
    <p>You do not have account <small className="text-primary">Create account</small></p>
        <div className="divider">OR</div>
      
        <button className="btn btn-outline" onClick={()=>signInWithGoogle()}>Continue with Google</button>
        <button className="btn btn-outline">Continue with Github</button>
      </div>
    </div>
    </div>
  );
};

export default Login;
