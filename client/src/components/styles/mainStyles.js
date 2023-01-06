import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';


export const MainBtn = styled(Button)`
  background: #584036;
  border-radius: 0px;
  width: 100px;
  height: 50px;
  border-color: #584036;
  margin: 10px;

  &:hover: {
    background-color: #584036 !important;
    background: #584036 !important;
    opacity: 0.7;
  }
` 

export const MainBtn2 = styled(Button)`
  background: white;
  border-radius: 0px;
  width: 100px;
  height: 50px;
  border-color: #584036;
  color: #584036;
  margin: 10px;

  &:hover: {
    background-color: #584036 !important;
    background: #584036 !important;
    opacity: 0.7;
  }
` 

export const HeadImg = styled(Image)`
  width: 600px;
  height: 600px;
  object-fit: cover !important;
`

export const MainHeader = styled.h1`
  color: #D6BCAA !important;
`

export const HomeHeader = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url("https://images.unsplash.com/photo-1532105111962-e23707867985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80");
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export const HomeHeaderTxt = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

export const WebFooter = styled.div`
text-align: center;
position: fixed;
bottom: 0;
background: #0D4A3A;
height: 2.5rem;
width: 100%;
`