var bookMarkInput = document.getElementById("bookMarkInput");
var urlInput = document.getElementById("urlInput");
var errorEl = document.getElementById("error");
var form = document.getElementById("form");
var closeEl = document.getElementById("closeEl");

var websitelist = [];
if (localStorage.getItem('dataList') !== null) {
  websitelist = JSON.parse(localStorage.getItem('dataList'));
  disPlay();
}

var urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+(\.[a-zA-Z]{2,})(\/[^\s]*)?$/;
function addWebsite(e) {


  if (!urlRegex.test(urlInput.value) || bookMarkInput.value === '' || bookMarkInput.value.length < 5) {

    errorEl.classList.replace("d-none", "d-flex");
    urlInput.classList.add("is-invalid");
    bookMarkInput.classList.add("is-invalid")

    return;
  }





  if (true) {
    urlInput.classList.add("is-valid");
    bookMarkInput.classList.add("is-valid")

  }






  var website = {
    Name: bookMarkInput.value,
    url: urlInput.value
  };

  websitelist.push(website);
  localStorage.setItem('dataList', JSON.stringify(websitelist));
  disPlay();


  urlInput.value = '';
  bookMarkInput.value = '';





}

function disPlay() {
  var temp = '';
  for (var i = 0; i < websitelist.length; i++) {
    temp += `<tr>
            <td>${i}</td>
            <td>${websitelist[i].Name}</td>
            <td> <a href="https://${websitelist[i].url}" target="_blank" class="text-decoration-none text-white btn btn-primary"><i class="fa-solid fa-eye me-1"></i>Visit</a></td>
            <td > <button class="btn bg-danger text-white" onclick="deleteWebsite(${i})"> <i class="fa-solid fa-trash-can me-1"></i>Delete</button></td>
          </tr>`;
  }
  document.getElementById("tableBody").innerHTML = temp;
}

function deleteWebsite(x) {
  websitelist.splice(x, 1);
  disPlay();
  localStorage.setItem('dataList', JSON.stringify(websitelist));
}

form.addEventListener("submit", (e) => {

  addWebsite();
});

closeEl.addEventListener("click", close);

function close() {
  urlInput.classList.remove("is-invalid");
  bookMarkInput.classList.remove("is-invalid")
  errorEl.classList.replace("d-flex", "d-none");
}

errorEl.addEventListener("click", function (e) {
  if (e.target == errorEl) {
    close();
    bookMarkInput.classList.remove("is-invalid")
    errorEl.classList.replace("d-flex", "d-none");
  }
});
document.addEventListener("keydown" , function(e){
if(e.key === "Escape"){
  close()
}
})

urlInput.addEventListener("focus" , function(){
  urlInput.classList.remove("is-valid")
  
})
bookMarkInput.addEventListener("focus" , function(){
  bookMarkInput.classList.remove("is-valid")
  
})



