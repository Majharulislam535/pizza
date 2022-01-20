import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCartApi from '../../ContextApi/useCartApi';

const Login = () => {
    let navigate = useNavigate();
    const { state } = useLocation();

    const emailRef = useRef();
    const passRef = useRef();
    const style = {
        width: "300px"
    }

    const { firebase } = useCartApi();
    const { error, setError, logInEmail } = firebase;

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        logInEmail(email, password)
            .then((result) => {
                const user = result.user;
                navigate(state?.path || "/cart");
                setError('');
            })
            .catch((error) => {
                setError(error.message);

            })
        e.target.reset();
    }
    return (
        <div>
            <div>
                <div >
                    <div className='flex justify-center min-h-screen items-center'>
                        <div className='text-center'>
                            <h1 className='mb-4 text-4xl text-yellow-700'>Login</h1>
                            <form onSubmit={handleSubmit}>
                                <input type="email" style={style} ref={emailRef} placeholder='E-mail' className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-yellow-500 focus:border-none mb-4' />
                                <br />
                                <input type="password" style={style} ref={passRef} placeholder='Password' className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-yellow-500 focus:border-none mb-4' />
                                <br />
                                <input type="submit" style={style} value="Login" className=' px-4 py-1 rounded w-full bg-yellow-500  hover:bg-yellow-600 pointer mb-4' />
                            </form>
                            <Link to='/registration' className='text-red-500 underline decoration-1'>New User</Link>
                            <p className='text-red-500'>{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;