import "./App.css";
import Graph from "./Graph";
import { useEffect, useState } from "react";


function App() {
    const [rawData, setRawData] = useState([]);
    const [amplData, setAmplData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [edge, setEdge] = useState(0);


    useEffect(()=>{
        const worker = new Worker("FourierWorker.js");
        worker.postMessage([edge]);
        worker.onmessage = (e) =>{
            let data = e.data;
            setRawData(data.rawData);
            setAmplData(data.amplData);
            setFilteredData(data.filteredData);
            worker.terminate();
        };
    },[edge]);


    return (
        <div className="App">
            <input step={0.1} id={"edge"} type={"number"} onChange={()=>{setEdge(Number(document.getElementById("edge").value));}}></input>
            <div className={"graphs"}>
                <Graph data={rawData}></Graph>
                <Graph data={amplData}></Graph>
                <Graph data={filteredData}></Graph>
            </div>
        </div>
    );
}

export default App;
