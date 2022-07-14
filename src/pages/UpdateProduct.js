import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useOneQuery, useUpdateOneMutation } from "../lib/slices/Api";

export default function UpdateProduct() {
    const { id } = useParams();
    const [UpdateOne, { isLoading: Loading, isError: Error }] =
        useUpdateOneMutation();
    const {
        data = {},
        isLoading,
        isError,
    } = useOneQuery({
        param: "products",
        id,
    });
    const [Data, setData] = useState({
        title: "",
        category: "",
        price: "",
        description: "",
    });
    useEffect(() => {
        const { title, description, category, price } = data;
        if (data) {
            setData({
                title: title,
                category: category,
                price: price,
                description: description,
            });
        }
    }, [data]);

    const handleData = (e) => {
        const { name, value } = e.target;
        setData({
            ...Data,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        UpdateOne({ param: "products", id, data: Data });
        console.log(Error, Loading);
    };
    if (isLoading) {
        return <h3>Loading...</h3>;
    }
    if (isError) {
        return <h3>Sorry there is an error!</h3>;
    }
    return (
        <div>
            <h1>UpdateProduct</h1>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column justify-content-around align-items-around">
                    <div>
                        <input
                            onChange={handleData}
                            name="title"
                            value={Data.title}
                            placeholder={"title"}
                            type={"text"}
                        />
                    </div>
                    <div>
                        <input
                            onChange={handleData}
                            name="category"
                            value={Data.category}
                            placeholder={"category"}
                            type={"text"}
                        />
                    </div>
                    <div>
                        <input
                            onChange={handleData}
                            name="price"
                            value={Data.price}
                            placeholder={"price"}
                            type={"number"}
                        />
                    </div>
                    <div>
                        <input
                            onChange={handleData}
                            name="description"
                            value={Data.description}
                            placeholder={"description"}
                            type={"text"}
                        />
                    </div>
                    <div>
                        <button type={"submit"}>
                            {Loading ? "Loading..." : "Submit"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
