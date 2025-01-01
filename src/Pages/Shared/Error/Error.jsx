import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className=" text-center mt-10">
            <h1 className="my-5 font-extrabold text-2xl">Opps !!!</h1>
            <Link to={"/"}>
           <div className=" ">
           <button className=" border rounded-md py-1 px-2">Back Home</button>
           </div>
            </Link>
        </div>
    );
};

export default Error;