import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = ({ title, text }) => {
  return (
    <Card className='card service-card'>
      <Card.Title className='title-dark'>{title}</Card.Title>
      <Card.Text className='para-dark'>{text}</Card.Text>
    </Card>
  )
}

export default Cards
