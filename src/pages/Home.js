import React from 'react'
import HomeImage from '../homeimage.jpg'

export default function Home() {
    return (
        <div className='container'>
            <div className='py-4'>
                Welcome to Unsunglegendz
            </div>
            <img src={HomeImage} />
        </div>
    )
}
