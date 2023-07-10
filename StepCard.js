import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function StepCard() {
  return (
    <CardGroup>
      <Card className="bg-dark text-warning" border="warning" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><center>Step One</center></Card.Title>
          <Card.Text>
          <p><center>*Create Token</center></p>
          <p><center>*Verification of bscscan</center></p>
          <p><center>*Launch project</center></p>
          <p><center>*List on pancake swap, or dextools</center></p>
          <p><center>*Marketing</center></p>
          </Card.Text>
        </Card.Body>
         </Card>{'   '}<br/>
      <Card className="bg-dark text-warning" border="warning" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><center>Step Two</center></Card.Title>
          <Card.Text>
          <p><center>*Coin marketing listing</center></p>
          <p><center>*Extra marketing</center></p>
          <p><center>*NFT</center></p>
          </Card.Text>
        </Card.Body>
        
      </Card>{'   '}<br/>
      <Card className="bg-dark text-warning" border="warning" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><center>Step Three</center></Card.Title>
          <Card.Text>
            <p><center>*Charity donation</center></p>
            <p><center>*Exchange listing</center></p>
            <p><center>*P2E games</center></p>
            <p><center>*Burning  5% of the total when reaching a capital of $10000</center></p>
          </Card.Text>
        </Card.Body>
     
        
      </Card><br/>
      <Card className="bg-dark text-warning" border="warning" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><center>Step Four</center></Card.Title>
          <Card.Text>
            <p><center>*Creating an application on the phone</center></p>
            <p><center>*Creating a marketplace</center></p>
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
  );
}

export default StepCard;