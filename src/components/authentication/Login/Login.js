import { Alert, AlertTitle, Button } from '@mui/material';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { firebase } = useAuth();
    const { getGoogleSignIn, getGithubSignIn, getEmailSignIn, getEmail, getPassword, getResetPassword, error, success, setUser, setError, setSuccess, setIsLoading } = firebase;

    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        setIsLoading(true);

        getGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
                console.log(result.user);
                setUser(result.user);
                setSuccess('Signed-In successfully!');
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }
    const handleGithubLogin = () => {
        setIsLoading(true);

        getGithubSignIn()
            .then(result => {
                history.push(redirect_uri);
                console.log(result.user);
                setUser(result.user);
                setSuccess('Signed-In successfully!');
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }

    const handleEmailLogin = (e) => {
        e.preventDefault();
        getEmailSignIn()
            .then(result => {
                console.log(result.user);
                if (result.user.emailVerified) {
                    history.push(redirect_uri);
                    console.log(result.user.emailVerified)
                    setUser(result.user);
                    setSuccess('Signed-In successfully!');
                    setError('');
                }
                else {
                    setError('You must verify your email to get access to your content!');
                    setSuccess('');
                }
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="my-5">
            <h2 className="mb-2">Please Sign In</h2>
            <div className="shadow px-2 col-md-6 mx-auto p-5 rounded-3">
                {
                    success &&
                    <Alert severity="success" className="mb-2 fw-bold">
                        <AlertTitle>Success</AlertTitle>
                        {success}
                    </Alert>
                }
                {
                    error &&
                    <Alert severity="error" className="mb-2 fw-bold">
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>
                }
                <form onSubmit={handleEmailLogin} className="col-md-8 d-flex flex-column gap-4 mx-auto mb-4" action="">
                    <input type="email" onBlur={getEmail} className="form-control" id="" placeholder="Email" required />
                    <input type="password" onBlur={getPassword} className="form-control" placeholder="Password" required />
                    <Button type="submit" variant="contained"><i className="fas fa-sign-in-alt me-2"></i> Login</Button>
                </form>
                <Button onClick={getResetPassword} variant="contained" className="bg-warning">Forget Password? Reset Now</Button><br /><br />
                <Button onClick={handleGoogleLogin} variant="contained" className="bg-danger"><i className="fab fa-google me-2"></i> Login With Google</Button><br /><br />
                <Button onClick={handleGithubLogin} variant="contained" className="bg-secondary"><i className="fab fa-github me-2"></i> Login With Github</Button><br /><br />
                <Link to='/register'>New User? Sign Up now!</Link>
            </div>
        </div>
    );
};

export default Login;