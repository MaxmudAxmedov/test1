import React from "react";
import { useGetAllData } from "../Query/useGetAllData";

export default function Home() {
    const { data, isLoading} = useGetAllData(1);
    console.log(data);

    // if (isLoading) return <h1>Loading...</h1>;
    return (
        <div>
         
        </div>
    );
}
