let catImage = document.querySelector(".catImage");
catImage.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");

let infogambar = catImage.getAttribute("src");

console.log(infogambar);

let ket = document.querySelector(".caption");
ket.innerHTML = ('<em>Tiga Anak Kucing yang lucu</em>');
//inner html akan mendeteksi adanya tag hmtl yang masuk.

// ket.innerText = ('<em>Tiga anak kucing yang lucu</em');
//inner text tidak akan mendeteksi adanya tag html yang masuk

let newElement = document.createElement('p');

let newElementV2 = newElement.innerHTML = ('Anda menekan gambar kucing sebanyak <span class = "count">0</span> kali');

document.body.appendChild(newElement);


catImage.addEventListener('click', function(event){
    document.querySelector('.count').innerHTML++;
});