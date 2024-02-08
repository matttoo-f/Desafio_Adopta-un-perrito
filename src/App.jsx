import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import MyCard from './components/MyCard';
import Footer from './components/footer';
import CardData from './components/CardData';



function App() {

  return (
    <>
    <Container fluid>

      <Header 
        title = "Adopta un Perrito" 
      />
      <Container fluid className='d-flex justify-content-center m-3'>
        <Row className ="xs=1 sm=3 md=4 lg=5  d-flex justify-content-space-around">

        {CardData.map( perrito => {
          return (
              <MyCard
                image={perrito.image}
                name={perrito.name}
                description={perrito.description}
                raza = {perrito.raza}
                color = {perrito.color}
              />
              )
            }
          )
        }

        </Row>

      </Container>

      <Footer 
        description = "Explora nuestra galería de adopción de perros para encontrar tu compañero perfecto.Tenemos una variedad de perros con diferentes personalidades y tamaños, en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perrito y bríndale una segunda oportunidad.Encuentra a tu compañero peludo para siempre."
      />
    </Container>
    </>
  )
}

export default App
