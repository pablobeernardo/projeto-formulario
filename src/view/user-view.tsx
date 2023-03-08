import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { ViewProps, ViewState } from '../types/types';


export default class UserView extends React.Component<ViewProps, ViewState>{
  render(){

    const {
      name,
      age,
      email,
      message,
      birthday,
      cpf,
      telefone,
      endereco,
      handleChange,
      handleSubmit,
      formSent
    } = this.props;
    
    return (
      <Container>
        <Form onSubmit = {handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="name" placeholder="Nome" name="name" value={name} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="cpf" placeholder="CPF" name="cpf" value={cpf} onChange={handleChange} />
              </Form.Group> 
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Idade</Form.Label>
                <Form.Control type="age" placeholder="Idade" name="age" value={age} onChange={handleChange} />
              </Form.Group> 
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicBirthday">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control type="birthday" placeholder="Data de Nascimento" name="birthday" value={birthday} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicTelefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="telefone" placeholder="Telefone" name="telefone" value={telefone} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEndereco">
                <Form.Label>Endereco</Form.Label>
                <Form.Control type="endereco" placeholder="Endereco" name="endereco" value={endereco} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control as="textarea" rows={3} type="message" placeholder="Mensagem" name="message" value={message} onChange={handleChange} />
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

