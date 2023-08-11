        import React from 'react'; 
        import { Navigate, Outlet } from 'react-router-dom'; 
        
        const PrivateComponent = () => {
            const auth=localStorage.getItem('user');              // it is used to check the user is logged in or not
             return auth? <Outlet />:<Navigate to="/signup" />     // if user is logged in then it will show the outlet page otherwise it will navigate to the signup page
        }                                                          // oulet means it will show the page which is inside the private component

        export default PrivateComponent;