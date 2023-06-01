
function showSizeMenu() {
  var category = document.getElementsByName("category")[0].value;
  var sizeMenu = document.getElementById("sizeMenu");
  if (category === "shirts") {
    sizeMenu.style.display = "block";
  } else {
    sizeMenu.style.display = "none";
  }
}
function showSizeShoe() {
  var category = document.getElementsByName("category")[0].value;
  var sizeShoe = document.getElementById('sizeShoe')

  if ( category === 'shoes') {
    sizeShoe.style.display = 'block'
  } else {
    sizeShoe.style.display = 'none';
  }
}
