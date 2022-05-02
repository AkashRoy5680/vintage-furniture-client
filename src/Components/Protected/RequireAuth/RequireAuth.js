import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Authentication/Loading/Loading';
import auth from '../../Firebase/Firebase.init';


const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location=useLocation();

    if(loading){
      return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    return children;
};

export default RequireAuth;