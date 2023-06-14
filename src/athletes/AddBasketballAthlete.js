import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function AddBasketballAthlete() {

    let navigate = useNavigate()

    const [basketballAthlete, setBasketballAthlete] = useState({
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

    const { firstName, lastName, age, points, rebounds, assists, blocks, gpa, email, dob, school, city, state } = basketballAthlete

    const onInputChange = (e) => {
        setBasketballAthlete({ ...basketballAthlete, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/api/v1/BasketballAthlete/AddAthlete', basketballAthlete)
        navigate('/')
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register Basketball Athlete</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-2'>
                            <label htmlFor="FirstName" className='form-label'>
                                FirstName
                            </label>
                            <input type={'text'} className='form-control' placeholder='FirstName' name='firstName' value={firstName} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="LastName" className='form-label'>
                                LastName
                            </label>
                            <input type={'text'} className='form-control' placeholder='LastName' name='lastName' value={lastName} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="Age" className='form-label'>
                                Age
                            </label>
                            <input type={'text'} className='form-control' placeholder='Age' name='age' value={age} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="Points" className='form-label'>
                                Points
                            </label>
                            <input type={'text'} className='form-control' placeholder='Points' name='points' value={points} onChange={(e) => onInputChange(e)} ></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="Rebounds" className='form-label'>
                                Rebounds
                            </label>
                            <input type={'text'} className='form-control' placeholder='Rebounds' name='rebounds' value={rebounds} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="Assists" className='form-label'>
                                Assists
                            </label>
                            <input type={'text'} className='form-control' placeholder='Assists' name='assists' value={assists} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="Blocks" className='form-label'>
                                Blocks
                            </label>
                            <input type={'text'} className='form-control' placeholder='Blocks' name='blocks' value={blocks} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="GPA" className='form-label'>
                                GPA
                            </label>
                            <input type={'text'} className='form-control' placeholder='GPA' name='gpa' value={gpa} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="Email" className='form-label'>
                                Email
                            </label>
                            <input type={'text'} className='form-control' placeholder='Email' name='email' value={email} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="DOB" className='form-label'>
                                DOB
                            </label>
                            <input type={'text'} className='form-control' placeholder='yyyy-MM-dd' name='dob' value={dob} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="School" className='form-label'>
                                School
                            </label>
                            <input type={'text'} className='form-control' placeholder='School' name='school' value={school} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="City" className='form-label'>
                                City
                            </label>
                            <input type={'text'} className='form-control' placeholder='City' name='city' value={city} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="State" className='form-label'>
                                State
                            </label>
                            <input type={'text'} className='form-control' placeholder='State' name='state' value={state} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link type='submit' className='btn btn-outline-danger mx-2' to='/'>
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
