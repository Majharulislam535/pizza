import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCartApi from '../../ContextApi/useCartApi';

const Registration = () => {
    let navigate = useNavigate();
    const { state } = useLocation();

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const style = {
        width: "300px"
    }

    const { firebase } = useCartApi();

    const { signUpEmail, user, setUser, error, setError, setDisplayName } = firebase;

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signUpEmail(email, password)
            .then((result) => {
                setDisplayName(name);
                navigate(state?.path || "/cart");
                setError('')
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            })
        e.target.reset()
    }

    console.log(user);

    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className='text-center'>
                    <h1 className='mb-4 text-4xl text-yellow-700'>Registration</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" style={style} placeholder=' Name' ref={nameRef} className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-yellow-500 focus:border-none mb-4' />
                        <br />
                        <input type="email" style={style} ref={emailRef} placeholder='E-mail' className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-yellow-500 focus:border-none mb-4' />
                        <br />
                        <input type="password" style={style} placeholder=' Password  ' ref={passRef} className='pointer border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-yellow-500 focus:border-none mb-4' />
                        <br />
                        <input type="submit" style={style} value="Registration" className=' px-4 py-1 rounded w-full bg-yellow-500  hover:bg-yellow-600 pointer mb-4' />
                    </form>
                    <Link to='/login' className='text-red-500 underline decoration-1'>Already registered</Link>
                    <p className='text-red-500'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Registration;