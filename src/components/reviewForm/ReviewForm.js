import { useState } from 'react';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ReviewForm = ({handleSubmit,setReview,review,labelText}) => {
    
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ExampleForm.ControlTextareal">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control as="textarea" rows={3} value={review} onChange={(e) => setReview(e.target.value)}/>
            </Form.Group>
            <Button variant="outline-info" type='submit'>Submit</Button>
        </Form>
    );
}

export default ReviewForm;