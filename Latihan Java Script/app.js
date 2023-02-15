const formS = document.getElementById("formS");
const luas = document.getElementById("luas");
const tinggi = document.getElementById("tinggi");
const hitung = document.getElementById("perhitungan");


  const sTampil = JSON.parse(localStorage.getItem("siku")) || [];

  const addSiku = (tinggi, luas, hasil) => {
     sTampil.push({
        tinggi,
        luas,
        hasil
     });


    localStorage.setItem("siku", JSON.stringify(sTampil));

    // return

    return {tinggi, luas, hasil};

  };


  // membuat element 

  const buatBaru = ({tinggi, luas, hasil}) => {
    const sDiv = document.createElement("div");
    const sP = document.createElement("p");
    const sP2 = document.createElement("p");
    const pH2 = document.createElement("h2") ;

    // inner text

    sP.innerText = "Tinggi: " + tinggi;
    sP2.innerText = "Luas: " + luas;
    pH2.innerText = "Hasilnya: " + hasil;

    // append

    sDiv.append(sP, sP2, pH2);
    hitung.appendChild(sDiv);



  };

   // foreach

   sTampil.forEach(buatBaru);

   // onsubmit

   formS.onsubmit = e => {
    e.preventDefault();

    // rumus

    const sTinggi = tinggi.value;
    const sLuas = luas.value;
    const Luas = (sTinggi*sLuas)/2;

    const sNew = addSiku(
        sTinggi,
        sLuas,
        Luas
    );

    buatBaru(sNew);


    tinggi.value = "";
    luas.value = "";
    

   };