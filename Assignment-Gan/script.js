let a = document.querySelector("#radio1");
let b = document.querySelector("#radio2");
let c = document.querySelector("#radio3");




const ab = document.querySelector(".gambar");
// ab.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhhITh_UBp-lQZcvbZzzOP3omrSLrBj7jUA&usqp=CAU");

b.addEventListener('click', function(event){
    ab.style.animation = 'slide10sInfinite'
    ab.setAttribute("src", "https://www.artix.com/media/2954/promo-darkonmadnessprint.jpg");
})

a.addEventListener('click', function(event){
    ab.setAttribute("src", "https://pbs.twimg.com/media/E54p7VNXIAEfBbB.jpg");
})
c.addEventListener('click', function(event){
    ab.setAttribute("src", "https://aq3d.com/media/4616/heromart-camp-war-shirts.png?center=0.297,0.495&width=1170px&height=658px&mode=crop");
})

