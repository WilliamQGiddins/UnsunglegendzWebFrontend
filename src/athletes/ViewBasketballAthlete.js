import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

export default function ViewBasketballAthlete() {

    const [athlete, setAthlete] = useState({
        firstName: '',
        lastName: '',
        age: '',
        points: '',
        rebounds: '',
        assists: '',
        blocks: '',
        gpa: '',
        email: '',
        dob: '',
        school: '',
        city: '',
        state: ''
    });

    const { id } = useParams();

    useEffect(() => {
        loadAthlete();
    }, []);

    const loadAthlete = async () => {
        console.log(id);
        const result = await axios.get(`http://localhost:8080/api/v1/BasketballAthlete/GetAthlete/${id}`)
        setAthlete(result.data)
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Athlete Stat Sheet</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Details of Athlete id:
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>FirstName:</b>
                                    {athlete.firstName}
                                </li>
                                <li className='list-group-item'>
                                    <b>LastName:</b>
                                    {athlete.lastName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Age:</b>
                                    {athlete.age}
                                </li>
                                <li className='list-group-item'>
                                    <b>Points:</b>
                                    {athlete.points}
                                </li>
                                <li className='list-group-item'>
                                    <b>Rebounds:</b>
                                    {athlete.rebounds}
                                </li>
                                <li className='list-group-item'>
                                    <b>Assists:</b>
                                    {athlete.assists}
                                </li>
                                <li className='list-group-item'>
                                    <b>Blocks:</b>
                                    {athlete.blocks}
                                </li>
                                <li className='list-group-item'>
                                    <b>GPA:</b>
                                    {athlete.gpa}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email:</b>
                                    {athlete.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to='/'>Return Home</Link>
                </div>
            </div>
        </div>
    )
}
