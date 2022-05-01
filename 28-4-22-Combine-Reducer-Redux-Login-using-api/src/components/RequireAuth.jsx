import React from 'react';
import { useSelector } from 'react-redux';

const RequireAuth = ({children}) => {
    const myState = useSelector((state) => state.Reducer.token);
    if (myState) return children;
    return "Please Login first";
}

export default RequireAuth