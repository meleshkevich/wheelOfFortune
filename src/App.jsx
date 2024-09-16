import { useGlobalContext } from './context';
import ControlButtonsGroup from './components/ControlButtonsGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import SelectorsGroup from './components/SelectorsGroup';

function App() {
  const { spinningWheelHtml } = useGlobalContext();

  return (
    <>
      <h2 className="title">Wheel of Fortune</h2>
      <Container className="mt-5">
        <Row className="wheel-container">
          <Col sm={4} className="wheel-control">
            <Stack gap={1}>
              <SelectorsGroup />
              <ControlButtonsGroup />
            </Stack>
          </Col>
          <Col sm={8} className="wheel-panel">
            <div>{spinningWheelHtml} </div>
            <div
              className="spinningWheelPanel-pointer"
              id="spinningWheelPanel-pointer"
            ></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
