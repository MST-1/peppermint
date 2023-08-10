import React from 'react'
import { styled } from 'styled-components'
import './card.css';

const Container=styled.div`
  position : relative;
  width : 1100px;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-wrap : warp;
  padding : 30px;  

`
const CardE=styled.div`
  position: relative;
  max-width : 300px;
  height : 215px;  
  background-color : #fff;
  margin : 30px 10px;
  padding : 20px 15px;
  
  display : flex;
  flex-direction : column;
  box-shadow : 0 5px 20px rgba(0,0,0,0.5);
  transition : 0.3s ease-in-out;
  border-radius : 15px;
&:hover {
  height : 320px;    
}


`
const Image=styled.div`
  position : relative;
  width : 260px;
  height : 260px;
  
  top : -40%;
  left: 8px;
  box-shadow : 0 5px 20px rgba(0,0,0,0.2);
  z-index : 1;

`
const IMG=styled.img`
max-width : 100%;
  border-radius : 15px;


`
const Content=styled.div`

position : relative;
  top : -140px;
  padding : 10px 15px;
  color : #111;
  text-align : center;
  
  visibility : hidden;
  opacity : 0;
  transition : 0.3s ease-in-out;
 
`
export const Card = (item) => {

   console.log(item.details.title);
  return (
    <Container className='card_cont'>
     <CardE className='carde'>
       <Image>
       <IMG href = "#" src ={item.details.img}/>
       </Image>
       <Content className='contentE'>
       <h3>{item.details.title}</h3>
       <h4>Tech Required</h4>
        <p>{item.details.des}</p>
       </Content>
      
     </CardE>
    </Container>
  )
}
