import React from 'react';
import Layout from '../Layout';
import { routes } from './routes';
import { Route, Routes } from 'react-router-dom';

const RoutesRender = () => {
    return (
        <>
            <Routes>
                <Route>
                    {
                        routes.map((route: any, idx: any) => (
                            <Route
                                key={idx}
                                path={route.path}
                                element={<Layout>{route.component}</Layout>}
                            />
                        ))
                    } 
                </Route>
            </Routes>
        </>
    );
};

export default RoutesRender;
