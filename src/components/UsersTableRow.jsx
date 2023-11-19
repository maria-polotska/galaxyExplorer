import React from 'react'
import {useState, useEffect} from 'react';

const UsersTableRow = ({ user, openModal }) => {
    const [planet, setPlanet] = useState();
    const [planetName, setPlanetName] = useState();

    const fetchHomeworldData = async () => {
        
        try {
            const response = await fetch(user.homeworld);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // setPlanet(data);
            // console.log(data.name)
            // setPlanetName(data.name)
             openModal(data);
        } catch (error) {
            console.error('Error fetching homeworld data:', error);
        }
    }

    // useEffect(()=>{
    //     console.log("useEffect in UsersTableRow");
    //     fetchHomeworldData()
    // },[])

    return (
        <div className="row">
            <div className="col">{user.name}</div>
            <div className="col">{user.height}</div>
            <div className="col">{user.mass}</div>
            <div className="col">{new Date(user.created).toLocaleString()}</div>
            <div className="col">{new Date(user.edited).toLocaleString()}</div>
            <div className="col"><button className="homeworld-btn" onClick={fetchHomeworldData}>{user.homeworld}</button></div>
        </div>
    )
}

export default UsersTableRow
