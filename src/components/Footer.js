import React from 'react'

import styled from 'styled-components'

const Footer = () => {
    
    const footerStyle = {
        
      }
    
      return (
        <FooterContainer>
          <div className='row' style={footerStyle}>
            <br />
            <em>Gymondo test case, developed by Gonzalo Garcia 2020</em>
          </div> 
        </FooterContainer>
      )
    }
    
    const FooterContainer = styled.div `
    position: relative;
    padding: 1rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #efefef;
    font-style: 'italic';
    font-size: 16px;

    .row {
      padding: 1rem;
    }
`

export default Footer