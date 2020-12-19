import React from 'react';
import ContainerPics from './comps/ContainerPics'
import Signup from './comps/autenticacion/Signup'
import Login from './comps/autenticacion/Login'
import UpdateProfile from './comps/autenticacion/UpdateProfile'
import Dashboard from './comps/autenticacion/Dashboard'
import ForgotPassword from './comps/autenticacion/ForgotPassword'
import PrivateRoute from './comps/autenticacion/PrivateRoute'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {

  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >

      <div className="w-100" style={{ maxWidth: "400px" }}>

        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/pictures" component={ContainerPics} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>

    </Container>

  );
}

export default App;
