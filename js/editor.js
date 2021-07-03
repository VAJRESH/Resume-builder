function loadPage(href) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", `${href}#resume`, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}
const resumeView = document.getElementById("resume-view");

function insertResume() {
  return new Promise((res, rej) => {
    console.log(resumeView);
    resumeView.innerHTML = loadPage("resume1.html");
    res();
  });
}

insertResume()

function onClick() {
  html2pdf(resumeView);
    // html2canvas(resumeView, {
    //   onrendered: function(canvas) {

    //     var img = canvas.toDataURL("image/png");
    //     var doc = new jsPDF();
    //     doc.addImage(img, 'JPEG', 20, 20);
    //     doc.save('test.pdf');
    //   }

    // });
  };
  var element = document.getElementById("clickbind");
  element.addEventListener("click", onClick);