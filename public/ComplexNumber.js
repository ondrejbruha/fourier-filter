class ComplexNumber {
    constructor(a,b){
        this.real = a;
        this.imag = b;
    }
    static sum(a,b){
        return new ComplexNumber(a.real + b.real,a.imag + b.imag);
    }
    static multiply(a,b){
        return new ComplexNumber(a.real*b.real - a.imag*b.imag, a.real*b.imag + a.imag*b.real);
    }
    static abs(a){
        return Math.sqrt(a.real*a.real + a.imag*a.imag);
    }
    static arg(a){
        return Math.acos(a.real / (ComplexNumber.abs(a)));
    }
    static exp(a,e) {
        return new ComplexNumber(Math.pow(ComplexNumber.abs(a),e)*Math.cos(e*ComplexNumber.arg(a)),Math.pow(ComplexNumber.abs(a),e)*Math.sin(e*ComplexNumber.arg(a)))
    }
    static scalarMult(a,s){
        return new ComplexNumber(a.real*s,a.imag*s);
    }
    static getReal(a){
        return a.real;
    }
}