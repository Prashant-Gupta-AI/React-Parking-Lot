import React, { useState,useContext } from 'react';
import recordContext from './context/recordContext';
import './styles/parkingRegistration.css'



function ParkingRegistration() {

    const first = useContext(recordContext)

    const [vehicleRegistration, setVehicleRegistration] = useState({
        driver_name: '',
        vehicle_number: '',
        checkin: '',
        checkout: '',
        payment:10,
    });


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setVehicleRegistration({ ...vehicleRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const oldRecords = first.records;
        const newRecords = { ...vehicleRegistration, id: new Date().getTime().toString() };
        first.setRecords([...oldRecords, newRecords]);
        setVehicleRegistration({
            driver_name: '',
            vehicle_number: '',
            checkin: '',
            checkout: '',
            payment:10,
        })
        // console.log((Math.abs(new Date() - new Date(vehicleRegistration.checkout))))
    }


    return (
        <>
            <form action="" method="" onSubmit={handleSubmit}>
                <div className="form-entry">
                    <label htmlFor="driver_name">Driver Name:</label>
                    <input onChange={handleChange} value={vehicleRegistration.driver_name} type="text" name='driver_name' id='driver_name' required />
                </div>
                <div className="form-entry">
                    <label htmlFor="vehicle_number">Vehical Number:</label>
                    <input onChange={handleChange} value={vehicleRegistration.vehicle_number} type="text" name='vehicle_number' id='vehicle_number' required />
                </div>
                <div className="form-entry">
                    <label htmlFor="checkin">CheckIn Time:</label>
                    <input onChange={handleChange} value={vehicleRegistration.checkin} type="datetime-local" name="checkin" id="checkin" required min="2022-08"/>
                </div>
                <div className="form-entry">
                    <label htmlFor="checkout">CheckOut Time:</label>
                    <input onChange={handleChange} value={vehicleRegistration.checkout} type="datetime-local" name="checkout" id="checkout" required min={vehicleRegistration.checkin} />
                </div>
                <div className="form-entry">
                    <label htmlFor="payment">Charges:</label>
                    <input onChange={handleChange} value={vehicleRegistration.payment} type="number" name="payment" id="payment" required min={0} step={5} />
                </div>
                    <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ParkingRegistration;