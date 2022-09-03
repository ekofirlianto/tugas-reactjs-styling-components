import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

export default class About extends React.Component {
  render() {
    return (
      <section id="about">
        <Container className="container text-center">
          <h2 className="mb-3">About Me</h2>
          <p className="mb-5">
            My name is Eko Firlianto used to be called Eko. My height was 182 cm and it was quite annoying for me because at school I was always the highest person in class or even at school. I am not comfortable with this because every
            time I walk people always see me strangely. Sometimes I'm confused whether they see me too high or I'm too handsome, but it looks like I'm too handsome.
          </p>
          <Row className="row text-center">
            <Col md={3}>
              <h5 className="mb-3">Riwayat Pendidikan</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic nulla reiciendis facere asperiores illo architecto adipisci possimus nesciunt accusamus inventore, porro eius, cumque fugiat quos dolorem fuga sapiente
                sit!
              </p>
            </Col>

            <Col>
              <h5 className="mb-3">Pengalaman Kerja</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odio cum provident necessitatibus quam libero iure tenetur maxime harum, architecto enim iste explicabo magni ducimus laboriosam eum, laudantium repellat!
                Dignissimos voluptatibus quos quibusdam similique rerum, aut distinctio labore nesciunt reiciendis velit eligendi dolorem eos alias vel fugiat tempore, dolorum ab?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt culpa quae inventore at possimus facere totam dolorum non fuga, ullam, nostrum placeat corrupti rem! Sit explicabo debitis cupiditate officiis veritatis!
              </p>
            </Col>

            <Col md={3}>
              <h5 className="mb-3">Hobi</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic nulla reiciendis facere asperiores illo architecto adipisci possimus nesciunt accusamus inventore, porro eius, cumque fugiat quos dolorem fuga sapiente
                sit!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
