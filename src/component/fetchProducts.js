import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import StarRatings from "react-star-ratings";

export function FetchData(){
    const[record,setRecord]=useState([])
    const[csv,setCsv]=useState([])
    const[count,setCount]=useState(0)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(response=>response.json())
        .then(data=>setRecord(data))
    })
    
    const headers=[
        {label:"ID",key:"id"},
        {label:"TITLE",key:"title"},
        {label:"PRICE",key:"price"},
        {label:"CATEGORY",key:"category"},
        {label:"DESCRIPTION",key:"description"},
    ]

    return(
        <>  
            <div className="position-absolute">
                <h1>PRODUCTS</h1>
            </div>
            <div className="d-flex justify-content-end">
                <CSVLink data={csv} headers={headers} filename="Product_data.csv">
                <button className="btn btn-success position-relative mt-2">DOWNLOAD CSV</button>                   
                </CSVLink>
            </div>
            <hr/>
            <>
            <table>
            <thead>
                <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Category</td>
                    <td>Rating</td>
                    <td>price</td>
                    <td>ADD-CARD</td>
                    <td>More-Details</td>
                    <td></td>
                </tr>
            </thead>                
                    {
                        record.map((value,index)=>(
                        // <tbody>
                            <tr>
                                <td><img src={value.image} className="product_Img"/></td>
                                <td>{value.title}</td>
                                <td>{value.category}</td>
                                <td>{value.rating.rate}<br/>
                                <StarRatings
                                rating={value.rating.rate}
                                starDimension="20px"
                                starSpacing="2px"
                                starRatedColor="gold"/>
                                </td>
                                <td>{value.price}</td>
                                <td><input type="text" value={count}/></td>
                                <td><button className="btn btn-success" onClick={()=>{setCount(count+1)}}>ADD</button></td>
                                <Link to={`/productDetails/${value.id}`}><td><button className="btn btn-primary">VIEW</button></td></Link>
                            </tr>
                        // </tbody>
                        ))
                    }                                               
            </table>                
            </>     
        </>
    );
}