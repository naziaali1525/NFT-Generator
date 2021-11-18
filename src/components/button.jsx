import React from 'react';
import {Button} from 'react-bootstrap';


class SignUP extends React.Component {
    render() { 
        return (
        <div className='login'>
            <p className='ask-question m-0'>Already have an account?</p>
            <button type="button" className="btn-primary signin-btn">Sign in</button>   
        </div>
        );
    }
}
 
export default SignUP;