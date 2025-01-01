import axios from "axios";
import { useState } from "react";


const SignUpSignIn = () => {
    
    const [post, setPost]=useState({
        email: " ",
        password: " "
    });

    const handleCheange = event =>{
       const value=event.target.value
       
       setPost({...post, [event.target.name]: value});
    }

    const handleSubmit= event =>{
        event.preventDefault();

        const userData = {
            email: post.email,
            password: post.password
          };

        axios.post('https://jsonplaceholder.typicode.com/posts', userData)
        .then(res => console.log(res.data)
        )
    }
    return (
        <div className="border-2 w-[40%] mx-auto rounded-lg">
            <h1 className=" text-2xl font-medium text-center my-4">Sign In Account</h1>
            <form onSubmit={handleSubmit}>
             <label htmlFor="email" className=" block text-center my-2">
                Email :
                <input type="email"
                 placeholder="Enter your email"
                 name="email"
                 id="email"
                 className=" ml-10 px-3 py-1 rounded-sm"
                 onChange={handleCheange}
                 />
                 </label>

             <label htmlFor="password" className=" block text-center my-2">
                Password :
                <input type="password" 
                placeholder="Enter your password"
                name="password"
                id="password"
                autoComplete="on"
                className=" ml-3 px-3 py-1 rounded-sm"
                onChange={handleCheange}
                />
             </label>
            
            <div className=" text-center my-4">
            <button type="submit" className="btn">SignIn</button>
            </div>
            </form>
        </div>
    );
};

export default SignUpSignIn;