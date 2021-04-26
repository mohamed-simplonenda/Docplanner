import {Card} from 'react-bootstrap';
function Stat() {
    return (
      <div className=" stat">
         
       
   <div className="row">
       <div className="col-md-6 col-12 titre1 pt-5">
       <h3>The world's biggest healthcare platform</h3>
        
        <p >
        We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.
        </p>

       </div>
       <div className="col-md-3 col-6 text-center pt-4">
       <Card className="Card cardstat" text="light" style={{ width: '14rem',height: '16rem', background: 'white',padding: '1em 0.3em 1em 0.3em' }}>
            <Card.Body>
            <Card.Title>      
                <img
                src="/flag.png"
                max-width= "100%"
                height= "auto"
                alt="React Bootstrap logo"
            />
            </Card.Title>
            <Card.Text>
            <h4>Leader in 12 countries </h4> 
            <small className="text-dark">Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile</small>

            </Card.Text>
            </Card.Body>
       </Card>
           

       </div>
       <div className="col-md-3 col-6 text-center pt-2">
       <Card className="Card cardstat" text="light" style={{ width: '14rem',height: '16rem', background: 'white',padding: '1em 0.3em 1em 0.3em' }}>
            <Card.Body>
            <Card.Title>      
                <img
                src="/visits.png"
                max-width= "100%"
                height= "auto"
                alt="React Bootstrap logo"
            />
            </Card.Title>
            <Card.Text>
            <h4>4.8 million appointments </h4> 
            <small className="text-dark">booked last month.</small>

            </Card.Text>
            </Card.Body>
       </Card>

       </div>

   </div>


   <div className="row">
       <div className="col-md-6 col-12 titre1 pt-5">
       <img
                src="/bigLogo.png"
                width= "100%"
                height= "auto"
                alt="React Bootstrap logo"
            />


       </div>
       <div className="col-md-3 col-12 text-center pt-4">
       <Card className="Card cardstat" text="light" style={{ width: '14rem',height: '16rem', background: 'white',padding: '1em 0.3em 1em 0.3em' }}>
            <Card.Body>
            <Card.Title>      
                <img
                src="/patients.png"
                max-width= "100%"
                height= "auto"
                alt="React Bootstrap logo"
            />
            </Card.Title>
            <Card.Text>
            <h4>61.9 mln unique patients </h4> 
            <small className="text-dark">visit our websites each month</small>

            </Card.Text>
            </Card.Body>
       </Card>
           

       </div>
       <div className="col-md-3 col-12 text-center pt-2">
       <Card className="Card cardstat" text="light" style={{ width: '14rem',height: '16rem', background: 'white',padding: '1em 0.3em 1em 0.3em' }}>
            <Card.Body>
            <Card.Title>      
                <img
                src="/doctors.png"
                max-width= "100%"
                height= "auto"
                alt="React Bootstrap logo"
            />
            </Card.Title>
            <Card.Text>
            <h4>92.5k active doctors</h4> 
            <small className="text-dark">trust our solutions.</small>

            </Card.Text>
            </Card.Body>
       </Card>

       </div>

   </div>

   
       

    

    
    
    </div>
   
     
    );
  }
export default Stat;