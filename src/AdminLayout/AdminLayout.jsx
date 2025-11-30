import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Adminpanel = lazy(() => import('../components/Adminpanel'));
const Layout = lazy(() => import('../Layout/Layout'));

import {
    ADMIN

} from '../routes/pathname'


const AdminLayout = () => {
    return (
        <div>
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center vh-100 vw-100" > </div>}>
                <Routes>
                    <Route exact path="/" element={<Layout />}></Route>
                    <Route exact path={ADMIN} element={<Adminpanel />}>
                    
                    </Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default AdminLayout
