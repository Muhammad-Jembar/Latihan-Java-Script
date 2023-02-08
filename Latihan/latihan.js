const FormP = document.getElementById("formP");
const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar");
const hitung = document.getElementById("perhitungan");


  const pTampil = JSON.parse(localStorage.getItem("Panjang")) || [];
   
  const addPanjang = (panjang, lebar, hasil) => {

   pTampil.push({
     panjang,
     lebar,
     hasil  
  });

    localStorage.setItem("Panjang", JSON.stringify(pTampil));

    return {panjang, lebar, hasil}

  };

  // membuat element 

  const buatP = ({panjang, lebar, hasil}) => {
    pDiv = document.createElement("div");
    pH2 = document.createElement("h2");
    sP = document.createElement("p");
    sP2 = document.createElement("p");

    // inerHtml

    pH2.innerText = "Panjang " + panjang;
    sP.innerText = "Luas " + lebar;
    sP2.innerText = "Hasilnya : " + hasil;

    // append 

    pDiv.append(pH2, sP, sP2);
    hitung.appendChild(pDiv);

  };

  // foreach

 