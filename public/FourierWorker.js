importScripts("./Fourier.js")

onmessage = (e) =>{
    console.log("Begin Data Computing");
    let _randomData = e.data[1];
    let _spectrum = Fourier.dft(_randomData);
    let _amplSpectrum = Fourier.amplSpectrum(_spectrum);
    let _filteredData = Fourier.realData(Fourier.idft(_spectrum, e.data[0]));
    console.log("End Data Computing");
    postMessage({rawData: _randomData, amplData: _amplSpectrum, filteredData: _filteredData});

};
