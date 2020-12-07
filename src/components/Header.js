import React from 'react'
import PropTypes from "prop-types"

import styled from 'styled-components'

const propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string
  }

const Header = ( { title, logo }) => {
    return(
        <HeaderBar>
            <Title>{title}</Title>
            <Logo>
                <img className="image" src={logo} width="170" height="95" alt="Flexbox.ninja"></img>
            </Logo>
        </HeaderBar>
    )
}

const HeaderBar = styled.div `

    background-color : #ff7f66;

    padding: 5px 25px 5px 25px;
    margin: 0 0 0 0;
    display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
`
const Logo = styled.h1`
    font-size: 24px;
    font-weight: 600;
    .image {
        max-width: 100%;
        height: auto;
    }
        
    }
`

Header.propTypes = propTypes

export default Header