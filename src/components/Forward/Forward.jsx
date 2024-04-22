import React from 'react'
import { Link } from 'react-router-dom'


export default function Forward() {
    return (
        <>
            <div className='Back'>
                <Link to="/ficha"><img className='imagen-back' src='public/lugarYusuarios/s3.png' /></Link>
            </div>
        </>
    )
}
