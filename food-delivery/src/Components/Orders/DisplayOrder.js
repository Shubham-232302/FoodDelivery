import React from "react";

const DisplayOrder = (props) =>{

    const renderTable =({orderData}) =>{
        if (orderData){
            return orderData.map((item) =>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.item_cost}</td>

                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Rest. Name</th>
                        <th>name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Bank Name</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>

            </table>


        </div>
    )


}


export default DisplayOrder