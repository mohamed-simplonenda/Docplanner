import {Card} from 'react-bootstrap';
function Cards() {
    return (
      <div >
          <div className="row">
                <div className="col-md-4 col-12">
                <Card className="Card" text="light" style={{ width: '18rem', background: '#00b39b' }}>
    <Card.Body>
      <Card.Title>      
          <img
        src="/icon-patients.svg"
        max-width= "100%"
        height= "auto"
        alt="React Bootstrap logo"
      />
      </Card.Title>
      <Card.Text>
     <h3>For patients </h3> 
     <h4 className="">Find a doctor, book a visit and solve any health-related doubt</h4>

      </Card.Text>
    </Card.Body>
  </Card>

                </div>
                <div className="col-md-4 col-12">
                <Card className="Card" text="light" style={{ width: '18rem', background: '#3d83df' }}>
    <Card.Body>
      <Card.Title>      
          <img
        src="/icon-doctors.svg"
        max-width= "100%"
        height= "auto"
        alt="React Bootstrap logo"
      />
      </Card.Title>
      <Card.Text>
     <h3>For doctors </h3> 
     <h4 className="">Save time managing visits and cut no-shows by half</h4>

      </Card.Text>
    </Card.Body>
  </Card>
                    
                </div>
                  <div className="col-md-4 col-12">
                  <Card className="Card" text="light" style={{ width: '18rem', background: '#1b2734' }}>
    <Card.Body>
      <Card.Title>      
          <img
        src="/icon-clinics.svg"
        max-width= "100%"
        height= "auto"
        alt="React Bootstrap logo"
      />
      </Card.Title>
      <Card.Text>
     <h3>For clinics </h3> 
     <h4 className="">Deliver an exceptional patient experience in your clinic</h4>

      </Card.Text>
    </Card.Body>
  </Card>
                  
                  </div>
          </div>


       

    

    
    
    </div>
   
     
    );
  }
export default Cards;