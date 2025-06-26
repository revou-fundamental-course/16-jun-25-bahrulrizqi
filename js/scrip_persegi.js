

// luas segitiga
// Mengambil data dari html
const sisi_luas = document.getElementById('sisi-luas') ;
const hitung_luas = document.getElementById('hitung-luas');
const output_luas = document.getElementById('output-luas');
const reset_luas = document.getElementById('reset_luas');

// mengaktifkan tombol hitung memasukan data ke dalam rumus
hitung_luas.addEventListener ('click',function(e) { 
    e.preventDefault();
    let s = sisi_luas.value;
  
     // untuk angka valid tidak boleh kosong
     if ( !s ) {
        output_luas.innerHTML = `<H3>Mohon Diisi <br>
        Form Tidak Boleh Kosong </H3>`; 
        return;
        
    }
    
    // Angka Tidak Boleh bernilai 0 
    if ( s <= 0 ) {
        output_luas.innerHTML = `<H2>Mohon Diisi  </H2>
        <H2>Angka tidak Boleh Kosong  </H2>`; 
        return;        
    }

    let luas = s*s;
    output_luas.innerHTML =`<H2>Hasilnya adalah </H2>  
    <h1> K = ${s} x ${s} <br>
    K=${luas}</h1>`;

})

// reset button
reset_luas.addEventListener('click', function(e) {
    e.preventDefault();
    sisi_luas.value = "";
    output_luas.innerHTML =  "";

})

// keliling persegi
const sisi_keliling = document.getElementById('sisi-keliling') ;
const hitung_keliling = document.getElementById('hitung-keliling');
const output_keliling = document.getElementById('output-keliling');
const reset_keliling = document.getElementById('reset_keliling');

hitung_keliling.addEventListener ('click',function(e) { 
    e.preventDefault();
    let s1 = sisi_keliling.value;
  
     // untuk angka valid tidak boleh kosong
     if ( !s1 ) {
        output_keliling.innerHTML = `<H3>Mohon Diisi <br>
        Form Tidak Boleh Kosong </H3>`; 
        return;
        
    }

       // Angka Tidak Boleh bernilai 0 
    if ( s1 <= 0 ) {
        output_keliling.innerHTML = `<H2>Mohon Diisi  </H2>
        <H2>Angka tidak Boleh Kosong  </H2>`; 
        return;        
    }
    let keliling = 4*s1;
    output_keliling.innerHTML = `<H2>Hasilnya adalah </H2>  
    <h1> K = 4 x ${s1} <br>
    K=${keliling}</h1>`;

})


// reset buton
reset_keliling.addEventListener('click', function(e) {
    e.preventDefault();
    sisi_keliling.value = "";
    output_keliling.innerHTML = "";

})

