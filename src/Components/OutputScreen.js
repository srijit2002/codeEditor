import React,{useEffect} from "react";
import { useGlobalContext } from "../context"
import Styled from "styled-components";


const OutputScreen = () => {
    const {html,css,js,srcDoc,setsrcDoc} = useGlobalContext();
    useEffect(()=>{
        const timeout=setTimeout(() => {
            setsrcDoc(`
            <html>
            <head>
                <style>${css}</style>
            </head>
                <body>${html}</body>
                <script>${js}</script>
            </html>
            `)
        }, 700);
       
        return ()=>clearTimeout(timeout);
    },[html,css,js])
    return (
        <Frame>
            <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-modals allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />
        </Frame>
    )
}


const Frame=Styled.main`
        position: relative;
        width:100%!important;
        background-color:#fff;
        iframe{
            position:relative;
            top:0;
            left:0;           
            width:100%;
            min-height:100vh!important;
            background-color:#fff;
        }
        `;
export default OutputScreen;