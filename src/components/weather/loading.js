import styles from "../../assets/css/loading.module.css";
import Kmaleon from "../../assets/Kmaleon.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
export default function Loading() {
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="img-container-k">
          <img className='imagen' alt="" width="100" height="auto" src={Kmaleon} />
        </Col>
      </Row>
      <Container className={styles.loadingContainer}>
        {/* <div className={styles.loader}>
          <div></div>
        </div> */}
        <Row className="">
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </Row>


      </Container>
    </>

  );
}
