import React, {useState} from "react";
import RecordContext from './recordContext';


const RecordState = (props) =>{

    const [records, setRecords] = useState([])

    
    return(
        <RecordContext.Provider value = {{records,setRecords}}>
            {props.children}
        </RecordContext.Provider>
    )

}

export default RecordState;