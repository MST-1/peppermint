import React from 'react'
import { styled } from 'styled-components';
import { Card } from './Card';
import { opening } from '../arr';



const Card_container=styled.div`
width:90%;
height:70vh;
display:flex;
font-family: 'Bebas Neue', sans-serif;




`
export const Mainbody = () => {



  return (
    <div class="main_body">
     <div class="about">
            <h1>Carrers</h1>
        <h2>About Peppermint</h2>
        <p>Peppermint is an award-winning robotics company, supported by SINE IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial and Enterprise robots and platforms for mobility-led services. The Engineering team has 50+ years of experience in building deep-tech and robotics products. Robots built on the Peppermint Platform are deployed across 13 cities in 4 countries!</p>
     </div>
     <div class="carrer_list_container">
        <h4> WE'RE HIRING!</h4>
        <h1>Current Openings</h1>
     </div>

     <Card_container class="item_list" id="card_items">
         {opening.map((e)=>{

           return  <Card details={e}/>
           
         })}

       
       

     </Card_container>
    </div>
  )
}
