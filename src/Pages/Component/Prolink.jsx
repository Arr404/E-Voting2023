import React, { useEffect, useState } from "react";

import { getAccessToken } from "../../utils/auth";

import { Navigate, Route, RouteProps } from 'react-router-dom';

const Prolink = ({ element: Component, path }) => {
    if (!getAccessToken() === null) {
        return <Route exact path={path} element={Component} />;
    }

    return  <Route exact path={path} element={Component} />;
};


export default Prolink;
