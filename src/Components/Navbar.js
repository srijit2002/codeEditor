import React from "react";
import Styled from "styled-components";
import { FaCaretSquareUp,FaCaretSquareDown } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar=()=>{
    const {fontSize,setFontSize,handleView,setCurrentTab} = useGlobalContext();
   
    return(
        <NavPanel>
           <Hamburger>
                <Button onClick={()=>setCurrentTab("xml")}>HTML</Button>
                <Button onClick={()=>setCurrentTab("css")}>CSS</Button>
                <Button onClick={()=>setCurrentTab("javascript")}>Js</Button>
            </Hamburger>
            <Controls>
                <FaCaretSquareUp className="icon" onClick={()=>fontSize<30&&setFontSize(fontSize+1)}/>
                    <input type="text" readOnly={true} value={`${fontSize}px`}/>
                <FaCaretSquareDown className="icon"onClick={()=>fontSize>15&&setFontSize(fontSize-1)}/>
            </Controls>
           
            <Button onClick={handleView} id="viewChanger">Change View</Button>
        </NavPanel>
    )
}
const NavPanel=Styled.nav`
    top:0;
    width:100vw;
    background-color:var(--secondary-clr);
    display:flex;
    justify-content:flex-end;
    align-items:center;
    padding-right:2em;
  @media(max-width:600px){
    justify-content:space-around;
    padding:0.5em 1em;
    justify-content:space-between;
    #viewChanger{
        display:none;
    }
  }
`
const Button=Styled.button`
    background-color:var(--btn-clr);
    color:white;
    transition:background-color 350ms linear;
    font-size:1.1rem;
    padding:0.3em 0.5em;
    outline:1px solid transparent;
    border:1px solid transparent;
    border-radius:0.2rem;
    min-width:7ch;
    margin:1em 0.1em;
    &:hover{
        cursor:pointer;
        background-color:var(--btn-hover) ;
    }
    &:focus{
        outline:1px solid transparent;
        border:1px solid transparent;
    }
    @media(max-width:420px){
        font-size:0.9rem;
        
    }
`;
const Controls=Styled.div`
    display: flex;
    margin:0 1em;
    justify-content:center;
    align-items:center;
    @media(max-width:420px){
       margin:0 0.5em;
  }
    input{
        font-size:1.2rem;
        width:5ch;
        padding:0.2em;
        background-color:#263238;
        border:1px solid transparent;
        outline:1px solid transparent;
        color:var(--btn-clr);
        text-align:center;
        :focus{
            border:1px solid transparent;
            outline:1px solid transparent;
        }
        @media(max-width:420px){
        font-size:0.9rem;
        }
    }
   .icon{
    font-size:2.1rem;
    color:var(--btn-clr);
    transition:color 350ms linear;
    background-color:var(--secondary-clr);
    &:hover{
        cursor:pointer;
        color:var(--btn-hover);
    }
    @media(max-width:420px){
        font-size:1.6rem;
        }
   }
  
`;

const Hamburger=Styled.div`
       display:none;
    @media(max-width:600px){
        display:flex;
    }
`
export default Navbar;