import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blogs from './layouts/frontend/Blog';
import Login from './layouts/frontend/Login';
import Register from './layouts/frontend/Register';
import Products from './layouts/frontend/Products';

import User from './layouts/backend/User/User';
import Product from './layouts/backend/Product/Product';
import Category from './layouts/backend/Category/Category';
import Order from './layouts/backend/Order/Order';
import Blog from './layouts/backend/Blog/Blog';

import NotFound from './pages/Page404';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'user/add', element: <User /> },
        { path: 'product', element: <Product /> },
        { path: 'category', element: <Category /> },
        { path: 'order', element: <Order /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'products', element: <Products /> },
        { path: 'blogs', element: <Blogs /> },
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
