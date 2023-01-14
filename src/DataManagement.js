import {Fourier} from "./Fourier";

export class Data {
    constructor() {
        this.randomData();
    }
    randomData(){
        this.data = [];
        this.data.length = 1000;
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] = Math.sin(4 * i / this.data.length) * i * Math.sin(100 * i / this.data.length)  * Math.random() * 5;
        }
    }
    computeSpectrum(){
        this.spectrum = Fourier.dft(this.data);
    }
    computeAmpl(){
        this.ampl = Fourier.amplSpectrum(this.spectrum);
    }
    computeFilteredData(edge){
        this.filtered = Fourier.realData(Fourier.idft(this.spectrum, edge));
    }
}