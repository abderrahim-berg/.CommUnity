import React from 'react'
import {Card,Button} from 'react-bootstrap'
import '../App.css';

 function schoolCard({image,titre}) {
  return (
<Card style={{ width: '18rem',margin:'10px' }}  >
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{titre}</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Button variant="primary">Acceder au profil de l'ecole</Button>
  </Card.Body>
</Card>

  )}
export default schoolCard;
