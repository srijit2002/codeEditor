import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding:0;
        box-sizing:border-box;
        scrollbar-width: thin;
        
    }
    ::-webkit-scrollbar-track{
        width:4px;
    }
    ::-webkit-scrollbar-track-piece{
        width:4px;
    }
    #root{
        width:100vw;
        min-height:100vh;
        
    }
    :root{
        --secondary-clr:#182024;
        --btn-clr:#219897;
        --btn-hover:#23bfbe;
        --tertiary-clr:#4f5e66;
        --ff-primary:'Poppins', sans-serif;
        --ff-secondary:'Fira Code', monospace;
    
}
   
    body{
        background-color:#263238;
        overflow-x: hidden;
        font-family: var(--ff-primary);
        font-weight:300;
        caret-color: var(--btn-clr);
        height:fit-content;
       
    }
    .CodeMirror-lines {
        font-family: var(--ff-secondary);
        font-weight:400;
    }
   
`
export default GlobalStyle;