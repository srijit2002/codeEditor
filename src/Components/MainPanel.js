import React from "react";
import EditorPanel from "./EditorPanel";
import OutputScreen from "./OutputScreen";
import { useGlobalContext } from "../context"
import Styled from "styled-components";

const MainPanel=()=>{
    const {view}=useGlobalContext();
    return(
        <Main view={view}>
            <EditorPanel/>
            <OutputScreen/>
        </Main>
    )
} 


const Main=Styled.main`
  position: relative;
  display:flex;
  flex-direction:${({view})=>{return view.layoutDirection}};
  width:100vw;
  min-height:89vh;
  @media (max-width:600px){
        flex-direction:column;
        resize:none;
    }
`
export default MainPanel;