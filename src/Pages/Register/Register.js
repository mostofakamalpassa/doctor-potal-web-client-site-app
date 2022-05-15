import React from "react";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const Register = () => {
    const navigate = useNavigate();
    const [sendEmailVerification, sending, emailValidationError] = useSendEmailVerification(
        auth
      );

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

    if (error  || googleError) {
        return (
          <div>
            <p className="text-red-500">Error: {error?.message}</p>
          </div>
        );
      }
      if (loading || googleLoading ) {
        return <Loading></Loading>
      }
      if (user || googleUser) {
        return (
          <div>
              {console.log(user)}
            <p>Signed In User: {user?.email}</p>
            {navigate('/')}
          </div>
        );
      }
      const onSubmit = (data) =>{
        //console.log(data);
        const email = data.email;
        const password = data.password;
        const displayName = data.userName;
       
        createUserWithEmailAndPassword(email, password);
        updateProfile({displayName});
        if(user){
            alert("place check your email  and verify ")
            sendEmailVerification();


        }
        
     }


    
  return (
    <div className="flex justify-center items-center min-h-[82vh]">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("userName", { required: true })}
              className="input input-bordered w-full max-w-xs mt-6"
              placeholder="Your full  name "
              type="text"
            />
            {errors.userName?.type === "required" && (
              <p className="text-red-500">User name is required</p>
            )}

            
            <input
              {...register("email", { required: true })}
              className="input input-bordered w-full max-w-xs my-6"
              placeholder="Enter Your Email"
              type="email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            <input
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })} placeholder="Password"
              type="password"
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
