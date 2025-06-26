

// luas segitiga
// Mengambil data dari html
const alas = document.getElementById('alas') ;
const tinggi = document.getElementById('tinggi');
const hitung_luas = document.getElementById('hitung-luas');
const output_luas = document.getElementById('output-luas');
const reset_luas = document.getElementById('reset_luas');

// mengaktifkan tombol hitung memasukan data ke dalam rumus
hitung_luas.addEventListener ('click',function(e) { 
    e.preventDefault();
    let a = alas.value;
    let t = tinggi.value;
  

     // untuk angka valid tidak boleh kosong
     if ( !a || !t ) {
        output_luas.innerHTML = `<H3>Mohon Diisi  </H3>
        <H3>Tidak Boleh Kosong </H3>`; 
        return;
    }
    
    // Angka Tidak Boleh bernilai 0 
    if ( a <= 0|| t <= 0 ) {
        output_luas.innerHTML = `<H2>Mohon Diisi  </H2>
        <H2>Angka tidak Boleh Kosong  </H2>`; 
        return;        
    }
    
    let luas = 0.5*a*t;
    output_luas.innerHTML = `<H3>Hasilnya adalah =</H3>  <h1>${luas}</h1>`;

})

// reset button
reset_luas.addEventListener('click', function(e) {
    e.preventDefault();
    alas.value = "";
    tinggi.value =  "";
    output_luas.innerHTML =  "";

})

// keliling segitiga
const sisi1 = document.getElementById('sisi1') ;
const sisi2 = document.getElementById('sisi2') ;
const sisi3 = document.getElementById('sisi3') ;
const hitung_keliling = document.getElementById('hitung-keliling');
const output_keliling = document.getElementById('output-keliling');
const reset_keliling = document.getElementById('reset_keliling')

hitung_keliling.addEventListener ('click',function(e) { 
    e.preventDefault();
    let s1 = Number ( sisi1.value); 
    let s2 = Number ( sisi2.value);
    let s3 = Number ( sisi3.value);    
    
    // untuk angka valid tidak boleh kosong
    if ( !s1 || !s2 ||!s3) {
        output_keliling.innerHTML = `<H2>Mohon Diisi  </H2>
        <H2>Tidak Boleh Kosong </H2>`; 
        return;        
    }

    // AngkaTidak Boleh bernilai 0 
    if ( s1 <= 0|| s2 <= 0 ||s3 <= 0 ) {
        output_keliling.innerHTML = `<H2>Mohon Diisi  </H2>
        <H2>Angka tidak Boleh Kosong </H2>`; 
        return;        
    }

    let keliling = s1 + s2 + s3;
    output_keliling.innerHTML = `<H2>Hasilnya adalah </H2>  <h1>K = Sisi1 + Sisi2 + Sisi3 <br>
    K = ${s1} + ${s2} + ${s3} <br>
    K    = ${keliling}</h1>`;

})

// reset buton
reset_keliling.addEventListener('click', function(e) {
    e.preventDefault();
    sisi1.value = "";
    sisi2.value = "";
    sisi3.value = "";
    output_keliling.innerHTML = "";

})

