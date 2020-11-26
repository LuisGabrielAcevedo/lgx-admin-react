import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../../store/slices/auth.slice'

const SignIn = () => {
    const dispatch = useDispatch()

    const signInFn = () => dispatch(signIn({
        email: "luisgabriel.ace@gmail.com",
        password: "123456"
    }));

    return (
        <div>
            <button onClick={signInFn}>Sign in</button>
        </div>
    )
}

export default SignIn
