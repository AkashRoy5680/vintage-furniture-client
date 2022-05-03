import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import google from "../../../images/social/google.png"
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();

    if(user){
        navigate("/home");
        console.log({user})
    }

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='d-flex align-items-center mt-3'>
                <div style={{height:"2px"}} className='bg-success w-50'> </div>
                <p className='mt-2 px-2'> or </p>
                <div style={{height:"2px"}} className='bg-success w-50'> </div>
            </div>

            <button onClick={() => signInWithGoogle()} className='w-50 rounded-pill m-2'>
            <img className='pe-5' src={google} alt="" />
            <span className='ps-1'>continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;