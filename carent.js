// let carBrand = document.querySelectorAll('[brand]')


// for (let i = 0; i < carBrand.length; i++) {
    
//     carBrand[i].addEventListener('click', function(){
//         // alert(carBrand[i].innerText)
//         let myClick = this.id;
//     switch (myClick) {
//         case 'tesla':
//             // alert(carBrand[0].innerText)
//             let cusoClick = document.querySelector('.cusor1')
//             cusoClick.addEventListener('click', function()
//         {alert('tesla1')})
//             break;
//         case 'bmw':
//             let cusoClik = document.querySelector('.cusor1')
//             cusoClik.classList.remove('cusor1')
//             cusoClik.classList.add('cusor4')
            
//             break;
//         case 'toyota':
//                  alert(carBrand[2].innerText)
//             break;
//         case 'benz':
//                 alert(carBrand[3].innerText)
//            break;
//         case 'honda':
//             alert(carBrand[4].innerText)
//            break;
//         case 'more':
//             alert(carBrand[5].innerText)
//            break;
//         default:
//             break;
//     }
//     })
// }

var slideIndes = 1;
showDivs(slideIndes);

function currentDiv(n) {
  showDivs(slideIndes = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mainSlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndes = 1}
  if (n < 1) {slideIndes = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndes-1].style.display = "block";
  dots[slideIndes-1].className += " w3-red";
};

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};

let slideIndexy = 1;
showSlidex(slideIndexy);

function currentSlides(m) {
  showSlidex(slideIndexy = m);
}

function showSlidex(m) {
  let i;
  let slidex = document.getElementsByClassName("mySlide1");
  let dotz = document.getElementsByClassName("dotz");
  if (m > slidex.length) {slideIndexy = 1}
  if (m < 1) {slideIndexy = slidex.length}
  for (i = 0; i < slidex.length; i++) {
    slidex[i].style.display = "none";
  }
  for (i = 0; i < dotz.length; i++) {
    dotz[i].className = dotz[i].className.replace(" active", "");
  }
  slidex[slideIndexy-1].style.display = "block";
  dotz[slideIndexy-1].className += " active";
};

let slideIndexy1 = 1;
showSlidex1(slideIndexy1);

function currentSlidesa(m) {
  showSlidex1(slideIndexy1 = m);
}

function showSlidex1(m) {
  let i;
  let slidex1 = document.getElementsByClassName("mySlide2");
  let dot1 = document.getElementsByClassName("dotz");
  if (m > slidex1.length) {slideIndexy1 = 1}
  if (m < 1) {slideIndexy1 = slidex1.length}
  for (i = 0; i < slidex1.length; i++) {
    slidex1[i].style.display = "none";
  }
  for (i = 0; i < dot1.length; i++) {
    dot1[i].className = dot1[i].className.replace(" active", "");
  }
  slidex1[slideIndexy1-1].style.display = "block";
  dot1[slideIndexy1-1].className += " active";
};

let slideIndexy2 = 1;
showSlidex2(slideIndexy2);

function currentSlidesb(m) {
  showSlidex2(slideIndexy2 = m);
}

function showSlidex2(m) {
  let i;
  let slidex2 = document.getElementsByClassName("mySlide3");
  let dot1 = document.getElementsByClassName("dotz");
  if (m > slidex2.length) {slideIndexy2 = 1}
  if (m < 1) {slideIndexy2 = slidex2.length}
  for (i = 0; i < slidex2.length; i++) {
    slidex2[i].style.display = "none";
  }
  for (i = 0; i < dot1.length; i++) {
    dot1[i].className = dot1[i].className.replace(" active", "");
  }
  slidex2[slideIndexy2-1].style.display = "block";
  dot1[slideIndexy2-1].className += " active";
};

let slideIndexy3 = 1;
showSlidex3(slideIndexy3);

function currentSlidesc(m) {
  showSlidex3(slideIndexy3 = m);
}

function showSlidex3(m) {
  let i;
  let slidex3 = document.getElementsByClassName("mySlide4");
  let dot1 = document.getElementsByClassName("dotz");
  if (m > slidex3.length) {slideIndexy3 = 1}
  if (m < 1) {slideIndexy3 = slidex3.length}
  for (i = 0; i < slidex3.length; i++) {
    slidex3[i].style.display = "none";
  }
  for (i = 0; i < dot1.length; i++) {
    dot1[i].className = dot1[i].className.replace(" active", "");
  }
  slidex3[slideIndexy3-1].style.display = "block";
  dot1[slideIndexy3-1].className += " active";
};

let slideIndexy4 = 1;
showSlidex4(slideIndexy4);

function currentSlidesd(m) {
  showSlidex4(slideIndexy4 = m);
}

function showSlidex4(m) {
  let i;
  let slidex4 = document.getElementsByClassName("mySlide5");
  let dot1 = document.getElementsByClassName("dotz");
  if (m > slidex4.length) {slideIndexy4 = 1}
  if (m < 1) {slideIndexy4 = slidex4.length}
  for (i = 0; i < slidex4.length; i++) {
    slidex4[i].style.display = "none";
  }
  for (i = 0; i < dot1.length; i++) {
    dot1[i].className = dot1[i].className.replace(" active", "");
  }
  slidex4[slideIndexy4-1].style.display = "block";
  dot1[slideIndexy4-1].className += " active";
};

var dmyIndex = 0;
dcarousel();

function dcarousel() {
  var i;
  var xl = document.querySelectorAll(".sub-themain-image");
  for (i = 0; i < xl.length; i++) {
    xl[i].style.display = "none";  
  }
  dmyIndex++;
  if (dmyIndex > xl.length) {dmyIndex = 1}    
  xl[dmyIndex-1].style.display = "block";  
  setTimeout(dcarousel, 2000); 
};

let slideTestimony = 1;
testShowSlidex(slideTestimony );

function testSlides(m) {
  testShowSlidex(slideTestimony = m);
}

function testShowSlidex(m) {
  let i;
  let testSlide = document.getElementsByClassName("complete-testimony");
  let dot1 = document.getElementsByClassName("dort");
  if (m > testSlide.length) {slideTestimony  = 1}
  if (m < 1) {slideTestimony  = testSlide.length}
  for (i = 0; i < testSlide.length; i++) {
    testSlide[i].style.display = "none";
  }
  for (i = 0; i < dot1.length; i++) {
    dot1[i].className = dot1[i].className.replace(" active", "");
  }
  testSlide[slideTestimony -1].style.display = "block";
  dot1[slideTestimony -1].className += " active";
  setTimeout(testShowSlidex, 2000); 
};

let buttons = document.querySelectorAll('.dort');
        // let defaulty = document.querySelector('.dortgroups')
		buttons.forEach(button => {
			button.addEventListener('click', function(){
				buttons.forEach(btn => btn.classList.remove('active'));
				this.classList.add('active');
			})
		});
let dotd = document.querySelectorAll('.dotz');
    // let defaulty = document.querySelector('.dortgroups')
dotd.forEach(button => {
  button.addEventListener('click', function(){
    dotd.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  })
});
let listIt = document.querySelectorAll('[navdata]');
    let defaulty = document.querySelector('ul')
listIt.forEach(button => {
  button.addEventListener('click', function(){
    listIt.forEach(btn => btn.classList.remove('activehd'));
    this.classList.add('activehd');
  })
});