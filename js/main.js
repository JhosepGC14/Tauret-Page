var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = (100 - percent) + "%";
  range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function () {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function () {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function () {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function () {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});



var inputLeft2 = document.getElementById("input-left");
var inputRight2 = document.getElementById("input-right");

var thumbLeft2 = document.querySelector(".pushbar_filtrado .slider > .thumb.left");
var thumbRight2 = document.querySelector(".pushbar_filtrado .slider > .thumb.right");
var range2 = document.querySelector(".pushbar_filtrado .slider > .range");

function setLeftValue2() {
  var _this = inputLeft2,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight2.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft2.style.left = percent + "%";
  range2.style.left = percent + "%";
}
setLeftValue2();

function setRightValue2() {
  var _this = inputRight2,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft2.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight2.style.right = (100 - percent) + "%";
  range2.style.right = (100 - percent) + "%";
}
setRightValue2();

inputLeft2.addEventListener("input", setLeftValue2);
inputRight2.addEventListener("input", setRightValue2);

inputLeft2.addEventListener("mouseover", function () {
  thumbLeft2.classList.add("hover");
});
inputLeft2.addEventListener("mouseout", function () {
  thumbLeft2.classList.remove("hover");
});
inputLeft2.addEventListener("mousedown", function () {
  thumbLeft2.classList.add("active");
});
inputLeft2.addEventListener("mouseup", function () {
  thumbLeft2.classList.remove("active");
});

inputRight2.addEventListener("mouseover", function () {
  thumbRight2.classList.add("hover");
});
inputRight2.addEventListener("mouseout", function () {
  thumbRight2.classList.remove("hover");
});
inputRight2.addEventListener("mousedown", function () {
  thumbRight2.classList.add("active");
});
inputRight2.addEventListener("mouseup", function () {
  thumbRight2.classList.remove("active");
});