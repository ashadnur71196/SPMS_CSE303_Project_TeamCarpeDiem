import Facultynav from './facultynav';
import '../../styles/facultycss/faculty.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


 export function Faculty() {
  return (
    <div>
      <Facultynav/>
      <div className="main-content">
        <h1>Faculty DashBoard</h1>
        <p>Faculty Info</p>

        <div className="faculty-info">
        <CardGroup>
      <Card className='fcard'>
       
        <Card.Body>
          <Card.Title>Classes Added</Card.Title>
          <Card.Text>
  
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='fcard'>
        <Card.Body>
          <Card.Title>Take Attedndance</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='fcard'>
        <Card.Body>
          <Card.Title>Assign Task</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>





        </div>


       




         
      </div>
    </div>
  );
}
