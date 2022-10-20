import logo from './logo.svg';
import './App.css';
import {Graph} from "./Graph";
import {Fourier} from "./Fourier";
import {ComplexNumber} from "./ComplexNumber";

function App() {
    let data = [];
    data.length = 100;
    for(let i = 0; i < data.length;i++) {
        data[i] = Math.sin(10 * i / data.length) * Math.random() * 5;
    }
    let spectrum = Fourier.dft(data);
    let ampl = Fourier.amplSpectrum(spectrum);
    let y = Fourier.realData(Fourier.idft(spectrum));
    return (
        <div className="App">
            <Graph data={data}></Graph>
            <Graph data={ampl}></Graph>
            <Graph data={y}>cc</Graph>
        </div>
    );
}

export default App;
