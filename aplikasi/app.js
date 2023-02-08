const sikuForm = document.getElementById("sikuForm");
const tinggi = document.getElementById("tinggi");
const luas = document.getElementById("luas");
const hitung = document.getElementById("perhitungan");

   const sTampil = JSON.parse(localStorage.getItem("siku2")) || [];

   const addSiku = (luas, tinggi, hasil ) => {
    sTampil.push({
      luas,
      tinggi,
      hasil
    });

    localStorage.setItem("siku2", JSON.stringify(sTampil));

    return {luas, tinggi, hasil};

   };

   //membuat element 

   const buatBaru = ({ luas,tinggi, hasil }) => {
     const sDiv = document.createElement("div");
     const sH2 = document.createElement("h2");
     const sP = document.createElement("p");
     const sP2 = document.createElement("p");
     const center = document.createElement("br");

     sP.innerText = "Luas: " + luas;
     sP2.innerText = "Tinggi: " + tinggi;
     sH2.innerText= "Hasilnya: " + hasil;
     
     
    sDiv.append(sH2,sP,sP2, center);
    hitung.appendChild(sDiv);
    

   };

   sTampil.forEach(buatBaru);

    sikuForm.onsubmit = e => {
     e.preventDefault();

      const sLuas = luas.value;
      const sTinggi = tinggi.value;
      const Luas = (sLuas*sTinggi)/2;

      const sNew = addSiku (
        sLuas,
        sTinggi,
        Luas
      );

      buatBaru(sNew);

      luas.value = "";
      tinggi.value = "";


    };

   

