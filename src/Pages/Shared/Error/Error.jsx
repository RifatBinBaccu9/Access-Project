import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className=" ">
            <h1>Opps !!!</h1>
            <Link to={"/"}>
            <button className=" border rounded-md py-1 px-2">Back Home</button>
            </Link>
        </div>
    );
};

export default Error;