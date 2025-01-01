import axios from "axios";
import { useState } from "react";


const SignUpSignIn = () => {
    const [value, setValue]=useState({
        email: " ",
        password: " "
    })

    const handleCheange = event =>{

    }

    const handleSubmit= event =>{
        event.preventDefault();

        axios.post('https://reqres.in/api/login')
        .then(res => setValue(res))
    }
    return (
        <div>
            <h1>Login Account</h1>
            <form onSubmit={handleSubmit}>
             <label htmlFor="email" className=" block">
                Email 
                <input type="text"
                 placeholder="Enter your email"
                 name="email"
                 id="email"
                 className=""
                 />
                 </label>

             <label htmlFor="password">
                Password 
                <input type="password" 
                placeholder="Enter your password"
                name="password"
                id="password"
                className=""
                />
             </label>

            </form>
        </div>
    );
};

export default SignUpSignIn;