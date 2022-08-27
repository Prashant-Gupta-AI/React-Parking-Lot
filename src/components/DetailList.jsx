import React, {useState, useContext} from 'react';
import './styles/detaillist.css'
import ParkingRegistration from './ParkingRegistration';
import Status from './Status';
import recordContext from './context/recordContext';

function dateStr(newdate){
 
  const date = new Date(newdate);
  const dateStr =
  ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
  ("00" + date.getDate()).slice(-2) + "/" +
  date.getFullYear() + " " +
  ("00" + date.getHours()).slice(-2) + ":" +
  ("00" + date.getMinutes()).slice(-2) + ":" +
  ("00" + date.getSeconds()).slice(-2);

  return dateStr
}

function DetailList() {

   const first = useContext(recordContext)
   

    return (
        <>
            <div className="details">
                {/* Order Details list */}
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="/#" className='bttn'>View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Vehical</td>
                                <td>Payment</td>
                                <td>CheckIn</td>
                                <td>CheckOut</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {first.records && first.records.map((record, index) => {
                    return (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{record.driver_name.toUpperCase()}</td>
                                <td>{record.vehicle_number.toUpperCase()}</td>
                                <td>{record.payment}</td>
                                <td>{dateStr(record.checkin)}</td>
                                <td>{dateStr(record.checkout)}</td>
                                <Status checkout= {record.checkout} />
                                {/* <td><span className='status delivered'>Delivered</span></td> */}
                            </tr>
                        </React.Fragment>
                    )
                })}
                        </tbody>
                    </table>
                </div>

                {/*  New Custumers */}
                <div className="newCustumers">
                    <div className="cardHeader">
                        <h2>New Customers</h2>
                    </div>
                    <ParkingRegistration />
                </div>
            </div>
        </>

    )
}

export default DetailList;