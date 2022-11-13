import React from 'react'
import { Container } from 'react-bootstrap'

function CopyRight() {
  return (
    <div className='copyRight bg-dark'>
        <Container className=' d-flex justify-content-between align-items-center py-4  lead text-white'>
        <div className="left samllFonts">
            <p>Copyright © Healing 2022. All rights reserved.</p>
        </div>
        <div className="right samllFonts">
            <p>Created by: Pure-Soft</p>
        </div>
        </Container>
    </div>
  )
}

export default CopyRight