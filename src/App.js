// App.js

import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import ProtectedRoute from './componenets/ProtectedRoute';
import Login from './componenets/Login';
import Dashboard from './componenets/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/" component={() => <div>Page d'accueil</div>} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
