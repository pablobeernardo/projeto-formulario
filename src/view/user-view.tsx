import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { ViewProps, ViewState } from '../types/types';


export default class UserView extends React.Component<ViewProps, ViewState>{
  render(){

    const {
      name,
      email,
      message,
      handleChange,
      handleSubmit,
      formSent
    } = this.props;
    
    return (
      <Container>
        <Form onSubmit = {handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="name" placeholder="Nome" name="name" value={name} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
          </Form.Group> 

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control type="message" placeholder="Mensagem" name="message" value={message} onChange={handleChange} />
          </Form.Group>

          
          <Button variant="primary" type="submit">
            Enviar  
          </Button>
          <div>
            <br></br>
            <span>{formSent?'Formulário enviado com sucesso!':''}</span>
          </div> 
        </Form>
      </Container>
   )
  }
  
 
}

