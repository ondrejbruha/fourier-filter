importScripts("./Fourier.js")

onmessage = (e) =>{
    console.log("Begin Data Computing");
    let _randomData = Fourier.randomData();
    let _spectrum = Fourier.dft(_randomData);
    let _amplSpectrum = Fourier.amplSpectrum(_spectrum);
    let _filteredData = Fourier.realData(Fourier.idft(_spectrum, 1));
    postMessage({rawData: _randomData, amplData: _amplSpectrum, filteredData: _filteredData})
    console.log("End Data Computing");
};
