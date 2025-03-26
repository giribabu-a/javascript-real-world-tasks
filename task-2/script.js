let textInput = document.getElementById("textInput");
let charCount = document.getElementById("charCount");

textInput.addEventListener('input', function(){
    let remainingCount = 50 - textInput.value.length;
    charCount.textContent = remainingCount;
});