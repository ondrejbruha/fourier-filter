importScripts("./ComplexNumber.js");
class Fourier {
    static randomData(){
        let data = [];
        data.length = 100;
        for (let i = 0; i < data.length; i++) {
            data[i] = Math.sin(4 * i / data.length) / (i * Math.sin(100 * i / data.length))* Math.random() * 5;
        }
        return data;
    }
    static dft(data){
        let len = data.length;
        let x = data;
        let w = new ComplexNumber(Math.cos(-2*3.14/len),Math.sin(-2*3.14/len));
        let s = [];
        s.length = len;
        for(let i = 1; i < len; i++){
            s[i] = new ComplexNumber(0,0);
            for(let j = 1;j < len; j++){
                s[i] = ComplexNumber.sum(ComplexNumber.scalarMult(ComplexNumber.exp(w,(1-j)*(i-1)),x[j]),s[i]);
            }
        }
        x = null;
        return s;
    }
    static amplSpectrum(s) {
        let a = [];
        a.length = s.length;
        for(let i = 0;i<s.length;i++){
            if(s[i]){
                a[i] = ComplexNumber.abs(s[i]);
            }
        }
        return a;
    }
    static idft(spectrum,edge){
        let len = spectrum.length;
        let s = spectrum;
        let w = new ComplexNumber(Math.cos(-2*3.14/len),Math.sin(2*3.14/len));
        let y = [];
        y.length = len;
        let ampl = Fourier.amplSpectrum(s);
        for(let i = 0; i <len; i++){
            if(ampl[i] < edge){
                s[i] = new ComplexNumber(0,0);
            }
        }
        for(let i = 1; i < len; i++){
            y[i] = new ComplexNumber(0,0)
            for(let j = 1;j < len; j++){
                y[i] = ComplexNumber.sum(y[i],ComplexNumber.scalarMult(ComplexNumber.multiply(s[j],ComplexNumber.exp(w,(1-j)*(i-1))),1/len));
            }
        }
        s = null;
        return y;
    }
    static realData(data){
        let realPart = [];
        for(let d of data){
           if(d) {
               realPart.push(d.real);
           }
        }

        return realPart;
    }
}