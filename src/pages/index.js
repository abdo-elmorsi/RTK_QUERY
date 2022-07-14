import React from "react";
import { Link } from "react-router-dom";
import {
    useDeleteOneMutation,
    useAddOneMutation,
    useAllQuery,
} from "../lib/slices/Api";
const Home = () => {
    const { data = [], isLoading, isError } = useAllQuery("products");
    const [DeleteOne] = useDeleteOneMutation();
    if (isLoading) {
        return <h3>Loading...</h3>;
    }
    if (isError) {
        return <h3>Sorry there is an error!</h3>;
    }
    return (
        <div>
            <h1>Home</h1>
            <AddPro id={data.length} />
            <div className="d-flex flex-wrap justify-content-between align-items-between">
                {data?.map((ele) => {
                    return (
                        <div
                            className="card col-12 col-md-4 col-xl-3 mb-4"
                            key={ele.id}
                        >
                            <div className="card-header">
                                <h4>{ele.title}</h4>
                            </div>
                            <div className="card-body">
                                <p>Category: {ele.category}</p>
                                <p>Price: {ele.price}</p>
                                <p>Description: {ele.description}</p>
                                <div className="d-flex justify-content-around mt-4">
                                    <Link to={`/product/${ele.id}`}>
                                        <button className="bg-success border-0 px-2 text-white rounded">
                                            Update
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() =>
                                            DeleteOne({
                                                param: "products",
                                                id: ele.id,
                                            })
                                        }
                                        className="bg-danger border-0 px-2 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;

export const AddPro = ({ id = 1 }) => {
    id = id + 1;
    const [AddProduct, { isLoading }] = useAddOneMutation();
    const data = {
        id: id,
        title: `Product ${id}`,
        category: "fitness",
        price: 4000 + id * 10,
        description: `This is description about product ${id}`,
    };
    return (
        <button
            disabled={isLoading}
            onClick={() => AddProduct({ param: "products", data })}
        >
            {isLoading ? "Loading..." : "Add a product"}
        </button>
    );
};
