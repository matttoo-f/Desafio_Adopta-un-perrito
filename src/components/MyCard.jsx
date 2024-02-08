import Card from 'react-bootstrap/Card';
import Tags from './tags';



const MyCard = ({image, name, description, raza, color})=> {
  return (
    <Card style={{ width: '14rem'}} className='m-2 p-3'>
      <Card.Img variant="top" src={image} />
      <Card.Body className=' d-flex flex-column justify-content-between'>
        <Card.Title>
          {name}
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags 
          variant='b'
          raza ={raza} 
          color ={color}
        />
      </Card.Body>
    </Card>
  );
}

export default MyCard;