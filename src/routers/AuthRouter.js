import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ScreenLogin } from '../components/auth/ScreenLogin';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ ScreenLogin }
                    />

                    <Route 
                        exact   
                        path="/auth/register"
                        component={ RegisterScreen }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}
