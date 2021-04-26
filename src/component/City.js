
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function City (props){
    return(
        props.modon.map(el=>
            <div>
            <Row>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={el.image} />
<Card.Body className="d-flex justify-content-between">
<div><Card.Title>{el.name}</Card.Title></div>
<div><Button variant="primary" size="sm"><small>SEE OPENING</small></Button>{' '}</div>


</Card.Body>
</Card>
</Row>
        </div>
            )

      )
  }
  export default City
