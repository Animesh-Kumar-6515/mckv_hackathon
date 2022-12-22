import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Container = styled('Box') (() => ({
    width:'250px',
    display:'flex',
    flexFlow:'column',
    justifyContent:'flex-start',
    padding: '20px 0 20px 20px',
}));
const Heading = styled('Typography') (() => ({
    color: 'white',
    padding: '10px 10px',
    fontFamily: 'sans-serif',
}));
const ItemContainer = styled('Box') (() => ({
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
}));
const Item = styled('Typography') (() => ({
    color: 'grey',
    margin: '5px 10px',
    fontFamily: 'sans-serif',
    fontSize: '14px'
}));


const FooterLeft = () => {
  return (
    <Box sx={{
        width: {xs:'100%', sm:'50%'},
        backgroundColor: '#282828',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }}>
        <Container sx={{height: '100px'}}>
            <Heading variant='h6'>Reservation</Heading>
            <ItemContainer>
                <Item >Modify/Cancel</Item>
                <Item >Retrieve Hotel Bill</Item>
            </ItemContainer>
        </Container>
        <Container sx={{height: '100px'}}>
            <Heading>Customer Service</Heading>
            <ItemContainer>
                <Item >Customer Service</Item>
                <Item >FAQs</Item>
                <Item >Contact Us</Item>
            </ItemContainer>
        </Container>
        <Container sx={{height: '150px'}}>
            <Heading>Coorporate Office</Heading>
            <ItemContainer>
                <Item >About Us</Item>
                <Item >Careers</Item>
                <Item >Investor Relation</Item>
                <Item >Hyatt Development</Item>
                <Item >Coorporate Responsibility</Item>
                <Item >Newsroom</Item>
            </ItemContainer>
        </Container>
        <Container sx={{height: '150px'}}>
            <Heading>Explore More</Heading>
            <ItemContainer>
                <Item >Travel Advisors</Item>
                <Item >Coroporate Travel</Item>
                <Item >Residences</Item>
            </ItemContainer>
        </Container>
    </Box>
  )
}

export default FooterLeft