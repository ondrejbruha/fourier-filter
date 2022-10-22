import logo from './logo.svg';
import './App.css';
import {Graph} from "./Graph";
import {Fourier} from "./Fourier";
import {ComplexNumber} from "./ComplexNumber";
import {Data} from "./DataManagement";
import {Label} from "recharts";

function App() {
    let data = new Data();

    return (
        <div className="App">
            <div className={"graphs"}>
                <Graph data={data.data}></Graph>
                <Graph data={data.ampl}></Graph>
                <Graph data={data.filtered}></Graph>
            </div>
        </div>
    );
}

export default App;
