import React from "react";
import { useState,useEffect } from "react";
import { CSVLink } from "react-csv";
import { useParams } from "react-router-dom";

export function Detail(){
    const[input,setInput]=useState([])

    var {id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(store=>setInput(store))
    })

    const headers=[
        {label:"ID",key:"id"},
        {label:"TITLE",key:"title"},
        {label:"IMAGE",key:"image"},
        {label:"CATEGORY",key:"category"},
        {label:"DESCRIPTION",key:"description"},
    ]
    return(
        <>
            <div className="d-flex justify-content-end">
                <CSVLink data={[input]} headers={headers} filename="Product_detail.csv">
                <button className="btn btn-success position-relative mt-2">DOWNLOAD CSV</button>                   
                </CSVLink>
            </div>

            <h1 className="head_One">{input.title} <span>Details</span></h1>
            <div className="container-fluid row">
                <div className="col-lg-6">
                    <img src={input.image} className="view_Img mt-4"/>
                    <h1 className="text-center mt-1">Product NO:{input.id}</h1>
                    <h4 className="text-center mt-2">{input.category}</h4>
                    <p className="text-center mt-2">{input.description}</p>
                </div>
            </div>
        </>
    );
}