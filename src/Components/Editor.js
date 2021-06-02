import React from "react";
import Styled from "styled-components";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript"
import {Controlled as ControlledEditor} from "react-codemirror2";
import { useGlobalContext } from "../context"
import { BiCodeAlt } from "react-icons/bi";
const Editor=({value,language,displayName,onChange})=>{
    
    const handleEdit=(editor,data,value)=>{
        onChange(value);
    }
    const {fontSize,view,currentTab} = useGlobalContext();
    return(
        <EditorPanel fontSize={fontSize} view={view} language={language} currentTab={currentTab}>
            <h1><BiCodeAlt/>{displayName}</h1>
            <ControlledEditor
                onBeforeChange={handleEdit}
                value={value}
                className="editor__wrapper"
                
                options={{
                    lineWrapping:true,
                    lineNumbers:true,
                    lint:true,
                    mode:language,
                    theme:"material",
                    matchBrackets:true
                }}
            />
        </EditorPanel>
    )
}
const EditorPanel=Styled.div`
    width:100%;
    min-height:50px;
    resize:${({view})=>{return view.resizeDirectionOfEditor}};
    overflow:auto;
    &+&{
        border-left:0.2rem solid var(--tertiary-clr) ;
    }
    h1{
        border-top:0.5rem solid var( --tertiary-clr);
        background-color:var(--secondary-clr);
        color:#FFF;
        padding:0.2em 0.4em;
        font-size:1.5rem;
        text-align:center;
        font-weight:400; 
        display:flex;
        align-items:center;
        justify-content:center;
        
    }
    .editor__wrapper{
        width:100%;
       
       
    }
    .CodeMirror-lines {
        font-size:${({fontSize})=>{return fontSize+"px"}}
    }
    @media (max-width:600px){
        display:${({currentTab,language})=>{
            if(language!==currentTab) return "none"}
        };
        width:100vw;
        height:80vh;
        resize:none;
    }
`;

export default Editor;