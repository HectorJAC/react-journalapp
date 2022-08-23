import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen';

import {firebase} from '../firebase/firebase-config';

import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    
    const dispacth = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispacth(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispacth(startLoadingNotes(user.uid));

            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispacth, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <h1> Wait... </h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
