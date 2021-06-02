import React from "react";
import Editor from "./Editor";
import Styled from "styled-components";
import {useGlobalContext} from "../context";

const EditorPanel=()=>{
    const {html,setHtml,css,setCss,js,setJs,view}=useGlobalContext();
    return (
        <EditorContainer view={view}>
            <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
            <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
            <Editor language="javascript" displayName="JS" value={js} onChange={setJs}/>
        </EditorContainer>
    )
}

const EditorContainer=Styled.div`
    position:relative;
    display:flex;
    flex-direction:${({view})=>{return view.FlexDirectionOfEditors}};
    width:${({view})=>{return view.totalWidthOfEditors}};
    min-width:200px;
    resize:${({view})=>{return view.resizeableDirectionOfEditorPanel}};
    overflow:auto;
    border:0.4rem solid  var(--tertiary-clr);
    @media (max-width:600px){
        flex-direction:row;
        width:100vw;
        resize:none;
    }
`;


export default EditorPanel;