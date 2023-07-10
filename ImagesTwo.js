import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Boxer from './boxer.png'
import TFive from './trapcoin5.png'
import Teight from './trapcoin8.png'

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Boxer} height={300} width={300} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={TFive} height={300} width={300} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Teight} height={300} width={300} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;