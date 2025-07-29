// EFEK WAVE
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = './assets/images/bg_v2.jpg'; // Ganti dengan path gambar

let waveOffset = 0;
const waveAmplitude = .6;
const waveFrequency = 0.05;
let scaledImageData = null;

function resizeCanvas() {
  // Ukuran canvas mengikuti lebar parent container
  const ratio = img.width / img.height;
  const containerWidth = canvas.clientWidth;
  const newWidth = containerWidth;
  const newHeight = containerWidth / ratio;

  canvas.width = newWidth;
  canvas.height = newHeight;

  // Buat image yang sudah diskalakan ke ukuran canvas
  const offscreen = document.createElement('canvas');
  offscreen.width = newWidth;
  offscreen.height = newHeight;
  const offCtx = offscreen.getContext('2d');
  offCtx.drawImage(img, 0, 0, newWidth, newHeight);

  scaledImageData = offscreen;
}

function drawWave() {
  if (!scaledImageData) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < canvas.height; y++) {
    const offset = Math.sin(y * waveFrequency + waveOffset) * waveAmplitude;
    ctx.drawImage(
      scaledImageData,
      0, y, canvas.width, 1,
      offset, y, canvas.width, 1
    );
  }
  waveOffset += 0.1;
  requestAnimationFrame(drawWave);
}

img.onload = function () {
  resizeCanvas();
  drawWave();
};

// Responsiveness: jika layar di-resize, update ulang canvas & gambar
window.addEventListener('resize', () => {
  resizeCanvas();
});

//APP
function pageStart(){
    // $(".section").addClass('hide')
    // $("#sectionPage1").removeClass('hide')

    location.href='v2_page1.html'
}
function pageNext1(){
    // $(".section").addClass('hide')
    // $("#sectionPage2").removeClass('hide')

    location.href='v2_page2.html'
}
function pageNext2(){
    // $(".section").addClass('hide')
    // $("#sectionPage3").removeClass('hide')

    location.href='v2_page3.html'
}
function pageNext4(){
  // $(".section").addClass('hide')
  //   $("#sectionPage5").removeClass('hide')
      location.href='page5.html'
}

function pageNext6(){
    $('#scentGrid1').removeClass('disable');
    $('#scentGrid2').removeClass('disable');
    $('.scent-option').removeClass('selected');
    $('.scent-option2').removeClass('selected');

    // $(".section").addClass('hide')
    // $("#sectionHome").removeClass('hide')

      location.href='index.html'
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
$('.scent-option').on('click', function () {
    $('#scentGrid1').addClass('disable');
    $('.scent-option').removeClass('selected');
    $(this).addClass('selected');

    const value = $(this).data('value');
    let randomNum = getRandomInt(1,5)
    localStorage.setItem('scent', randomNum);
    if(value == 'redmelon'){
      $("#video1Popup").removeClass("hide")
      document.getElementById('video1').play()
    }else{
      $("#video2Popup").removeClass("hide")
      document.getElementById('video2').play()
    }
    setTimeout(() => {
        // $(".section").addClass('hide')
        // $("#sectionPage4").removeClass('hide')
      location.href='v2_page4.html'
    }, 10000);
});

// let OPSI = ''
// $('.scent-option2').on('click', function () {
//     $('#scentGrid2').addClass('disable');
//     $('.scent-option2').removeClass('selected');
//     $(this).addClass('selected');

//     const value = $(this).data('value');
//     localStorage.setItem('scent2', value);
//     console.log('Selected scent:', value);
//     OPSI = value

//     // const randomNum = Math.floor(Math.random() * 6) + 1;
//     // const imgPath = `./assets/images/VEEV-${OPSI}.png`; // Pastikan path sesuai
//     // $('#hasilGambar').html(`
//     // <img src="${imgPath}" alt="Random Image">
//     // `);

//     setTimeout(() => {
//         // $(".section").addClass('hide')
//         // $("#sectionPage6").removeClass('hide')
//         location.href='page6.html'
//     }, 700);
// });

