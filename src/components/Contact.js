import React from 'react'
import { Link } from 'react-router-dom';
import Modal from './Modal';

export default function Contact(props) {
    console.log(props); // Shows info about the Router
    // setTimeout( () => {
    //     props.history.push('/about')
    // }, 2000) // Makes the Contact Page go to the About page after 2 seconds.
    return (
        <div>
            <Modal />
            <div
                className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
                <Link to='/alex' className='ui header'>Hi, Alex!</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, nihil. Consequuntur praesentium reiciendis iure soluta porro consequatur illum fugit, vitae consectetur eveniet est numquam adipisci quibusdam quaerat deleniti laborum expedita?</p>
            </div>
            <div
                className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
                <Link to='/wilma' className='ui header'>Hi, Wilma!</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, nihil. Consequuntur praesentium reiciendis iure soluta porro consequatur illum fugit, vitae consectetur eveniet est numquam adipisci quibusdam quaerat deleniti laborum expedita?</p>
            </div>
        </div>
        
    )
}
