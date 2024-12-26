// import React, { useContext } from 'react';
// import AuthContext from '../context/AuthContext/AuthContext';
// import { Navigate, useLocation } from 'react-router-dom';
// import Loader from '../pages/Loader/Loader';

// const PrivateRoute = ({children}) => {
//     const {user, loading} = useContext(AuthContext);
//     const location = useLocation();

//     if(loading){
//         return <Loader></Loader>
//     }

//     if(user) {
//         return children
//     }
    
//     return <Navigate to='/login' state={location?.pathname}></Navigate>
// };

// export default PrivateRoute;