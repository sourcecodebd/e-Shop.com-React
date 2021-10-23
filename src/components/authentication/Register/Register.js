import { Alert, AlertTitle, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { firebase } = useAuth();
    const { getEmailSignUp, name, email, password, getName, getEmail, getPassword, getVerifyEmail, getUpdateProfile, error, success, setError, setSuccess, setIsLoading } = firebase;

    const handleEmailRegister = (e) => {
        e.preventDefault();
        if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
            setError('Name cannot contain number!');
            setSuccess('');
            return;
        }
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setError('Invalid Email!');
            setSuccess('');
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
            setError('Password must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number!');
            setSuccess('');
            return;
        }
        getEmailSignUp()
            .then(result => {
                console.log(result.user);
                handleUpdateProfile();
                setSuccess('Signed-Up successfully!');
                setTimeout(() => {
                    handleVerifyEmail();
                }, 3000)
                setError('');
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }

    const handleVerifyEmail = () => {
        getVerifyEmail()
            .then(() => {
                setSuccess('Verification message sent to your email!');
            })
    }
    const handleUpdateProfile = () => {
        getUpdateProfile();
    }

    return (
        <div className="my-5">
            <h2 className="mb-2"><i className="fas fa-sign-up-alt"></i> Please Sign Up</h2>
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
                <form onSubmit={handleEmailRegister} className="col-md-8 d-flex flex-column gap-4 mx-auto mb-4" action="">
                    <input type="text" onBlur={getName} className="form-control" id="" placeholder="Name" required />
                    <input type="email" onBlur={getEmail} className="form-control" id="" placeholder="Email" required />
                    <input type="password" onBlur={getPassword} className="form-control" placeholder="Password" required />
                    <Button type="submit" variant="contained"><i className="fas fa-user-plus me-2"></i> Register</Button>
                </form>
                <Link to='/login'>Already Registered? Sign In now!</Link>
            </div>
        </div>
    );
};

export default Register;