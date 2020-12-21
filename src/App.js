import React from 'react';
import ContainerPics from './comps/ContainerPics'
import Signup from './comps/autenticacion/Signup'
import Login from './comps/autenticacion/Login'
import UpdateProfile from './comps/autenticacion/UpdateProfile'
import ForgotPassword from './comps/autenticacion/ForgotPassword'
import PrivateRoute from './comps/autenticacion/PrivateRoute'

import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {

  return (

    <div
      className="grid"
      style={{ minHeight: "100vh" }}
    >

      <div>

        <Router>
          <AuthProvider>
            <Switch>

              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/pictures" component={ContainerPics} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>

    </div>

  );
}

export default App;
