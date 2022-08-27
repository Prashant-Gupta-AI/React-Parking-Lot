import React from 'react';

function ParkingLot(props) {
    return (
        <>
            {props.records.length > 0 && (
                <h1>Number of cars in the parking lot are: {props.records.length}</h1>
            )}
            <table>
                <thead>
                    <tr>
                        <td>Entry</td>
                        <td>Veicle Number</td>
                        <td>Driver Name</td>
                        <td>Checkin Time</td>
                        <td>CheckOut Time</td>
                    </tr>
                </thead>
                <tbody>
                {props.records.map((record, index) => {
                    return (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{record.driver_name}</td>
                                <td>{record.vehicle_number}</td>
                                <td>{record.checkin}</td>
                                <td>{record.checkout}</td>
                            </tr>
                        </React.Fragment>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default ParkingLot