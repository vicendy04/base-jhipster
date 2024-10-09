import React from 'react';

import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import UserManagement from './user-management';
import Docs from './docs/docs';
import Tracker from './tracker/tracker';

const AdministrationRoutes = () => (
  <div>
    <ErrorBoundaryRoutes>
      <Route path="user-management/*" element={<UserManagement />} />
      <Route path="tracker" element={<Tracker />} />
      <Route path="docs" element={<Docs />} />
    </ErrorBoundaryRoutes>
  </div>
);

export default AdministrationRoutes;
