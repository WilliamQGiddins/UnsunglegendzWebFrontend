import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Basketball() {

    const [basketballAthletes, setBasketballAthletes] = useState([])

    const { id } = useParams()

    useEffect(() => {
        loadAthletes()
    }, []);

    const loadAthletes = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/BasketballAthlete/GetAllAthletes");
        setBasketballAthletes(result.data);
    };

    const deleteAthlete = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:8080/api/v1/BasketballAthlete/Delete/${id}`)
        loadAthletes();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <Link className='btn btn-primary mx-2' to="/addbasketballathlete">Add Athlete</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Age</th>
                            <th scope="col">Points</th>
                            <th scope="col">Rebounds</th>
                            <th scope="col">Assists</th>
                            <th scope="col">Blocks</th>
                            <th scope="col">GPA</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            basketballAthletes.map((athlete, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{athlete.firstName}</td>
                                    <td>{athlete.lastName}</td>
                                    <td>{athlete.age}</td>
                                    <td>{athlete.points}</td>
                                    <td>{athlete.rebounds}</td>
                                    <td>{athlete.assists}</td>
                                    <td>{athlete.blocks}</td>
                                    <td>{athlete.gpa}</td>
                                    <td>{athlete.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewbasketballathlete/${athlete.id}`}>View</Link>
                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteAthlete(athlete.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
