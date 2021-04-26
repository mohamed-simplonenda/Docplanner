import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
function Cardtarvel() {
    return (
      <div className="pt-3">
          <div className="row mt-3">
            
                <div className="col-md-4 col-12">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/warsaw.png" />
  <Card.Body className="d-flex justify-content-between">
     <div><Card.Title>Warsaw</Card.Title></div>
    <div><Button variant="primary" size="sm"><small>SEE OPENING</small></Button>{' '}</div>

    
  </Card.Body>
</Card>


                </div>
                <div className="col-md-4 col-12">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/barcelona.png" />
  <Card.Body className="d-flex justify-content-between">
     <div><Card.Title>Barcelona</Card.Title></div>
    <div><Button variant="primary" size="sm"><small>SEE OPENING</small></Button>{' '}</div>

    
  </Card.Body>
</Card>

                    
                </div>
                  <div className="col-md-4 col-12">
                  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/istanbul.png" />
  <Card.Body className="d-flex justify-content-between">
     <div><Card.Title>Istanbul</Card.Title></div>
    <div><Button variant="primary" size="sm"><small>SEE OPENING</small></Button>{' '}</div>

    
  </Card.Body>
</Card>

                  
                  </div>
          </div>

          <div className="row mt-5">
            
            <div className="col-md-4 col-12">
            <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="/rome.png" />
<Card.Body className="d-flex justify-content-between">
 <div><Card.Title>Rome</Card.Title></div>
<div><Button variant="primary" size="sm"><small>SEE OPENING</small></Button>{' '}</div>


</Card.Body>
</Card>


            </div>
            <div className="col-md-4 col-12">
            <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="/bologna.png" />
<Card.Body className="d-flex justify-content-between">
 <div><Card.Title>Bologna</Card.Title></div>
<div><Button variant="primary" size="sm"><small>SEE OPENING</small></Button>{' '}</div>


</Card.Body>
</Card>

                
            </div>
              <div className="col-md-4 col-12">
              <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="/curitiba.png" />
<Card.Body className="d-flex justify-content-between">
 <div><Card.Title>Curitiba</Card.Title></div>
<div><Button variant="primary" size="sm"><small>SEE OPENING</small></Button>{' '}</div>


</Card.Body>
</Card>

              
              </div>
      </div>

      <Card style={{ width: '18rem' }} className="mt-5">
<Card.Img variant="top" src="/mexico-city.png" />
<Card.Body className="d-flex justify-content-between">
 <div><Card.Title>Mexico City</Card.Title></div>
<div><Button variant="primary" size="sm"><small>SEE OPENING</small></Button>{' '}</div>


</Card.Body>
</Card>

     


              
              
      

    

    
    
    </div>
   
     
    );
  }
export default Cardtarvel;