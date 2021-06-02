import React,{useContext,useState} from "react";



const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [currentTab,setCurrentTab]=useState("xml");
    const [isInDefaultMode,setIsInDefaultMode]=useState(true);
    const [html,setHtml]=useState("");
    const [css,setCss]=useState("");
    const [js,setJs]=useState("");
    const [srcDoc,setsrcDoc]=useState("");
    const [fontSize,setFontSize]=useState(22);
    const [view,setView]=useState({FlexDirectionOfEditors:"column",layoutDirection:"row",totalWidthOfEditors:"30vw",minTotalHeightOfEditors:"40vh",resizeableDirectionOfEditorPanel:"horizontal",resizeDirectionOfEditor:"vertical"});
    const handleView=()=>{
            if(isInDefaultMode){
                setIsInDefaultMode(false);
                setView({FlexDirectionOfEditors:"row",layoutDirection:"column",totalWidthOfEditors:"100vw",minTotalHeightOfEditors:"60vh",resizeableDirectionOfEditorPanel:"vertical",resizeDirectionOfEditor:"horizontal"})
            }
            else{
                setIsInDefaultMode(true);
                setView({FlexDirectionOfEditors:"column",layoutDirection:"row",totalWidthOfEditors:"30vw",minTotalHeightOfEditors:"40vh",resizeableDirectionOfEditorPanel:"horizontal",resizeDirectionOfEditor:"vertical"});
            }
            
    }
    return(
        <AppContext.Provider value={{currentTab,setCurrentTab,html,css,js,setHtml,setCss,setJs,srcDoc,setsrcDoc,isInDefaultMode,fontSize,setFontSize,view,setView,handleView}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider};