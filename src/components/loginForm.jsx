import React from 'react';
import LeftBorder from './loginLeft';
import SignUP from './button';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginForm extends React.Component {
    render() { 
        return (
            <>
            <div className="row">

                <div className="col-3 side-border">
                    <LeftBorder />  
                </div>

                <div className="col sign-in ">   
                    <SignUP />            

                <Form className='login-form col-lg-5 col-sm-8 '>
                    <h3 className="mb-0">Get started absolutly free</h3>
                    <p className="mb-4 sm-3" >No credit card needed</p>
            
                    <Form.Group className="field mb-2 " controlId="formBasicName"> 
                    <Form.Control type="Text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="field mb-2 " controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted"> </Form.Text>
                    </Form.Group>
                
                    <Form.Group className="field mb-2 " controlId="formBasicPassword"> 
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                    <Form.Group className="field mb-2 " controlId="formBasicPassword"> 
                    <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    
                    <Button className="btn col-12 sign-up"  type="submit">
                     Sign up
                    </Button>
                </Form>
                </div>
        </div>
            
        </>
        );
    }
}
 
export default LoginForm;