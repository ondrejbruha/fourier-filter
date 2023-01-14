import "./App.css";
import Graph from "./Graph";
import { useEffect, useState } from "react";
import {Data} from "./DataManagement";

let data = new Data();
function App() {
    const [rawData, setRawData] = useState([]);
    const [amplData, setAmplData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [edge, setEdge] = useState(0);

    useEffect(()=>{
        setRawData(data.data);
    },[])

    useEffect(()=>{
        const worker = new Worker("FourierWorker.js");
        let begin = Date.now();
        worker.postMessage([edge, data.data]);
        worker.onmessage = (e) =>{
            console.log(`Computed in ${(Date.now() - begin)/1000} s`);
            let data = e.data;
            setAmplData(data.amplData);
            setFilteredData(data.filteredData);
            worker.terminate();
        };
    },[edge]);


    return (
        <div className="App">
            <input step={0.1} id={"edge"} type={"number"}></input>
            <button onClick={()=>{setEdge(Number(document.getElementById("edge").value));}}>Filter</button>
            <div className={"graphs"}>
                <Graph data={rawData}></Graph>
                <Graph data={amplData}></Graph>
                <Graph data={filteredData}></Graph>
            </div>
        </div>
    );
}

export default App;
