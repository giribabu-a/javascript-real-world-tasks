document.getElementById("searchInput").addEventListener("input", function(){
    let searchTerm = this.value.toLowerCase();
    let items = document.querySelectorAll("#itemList .list-group-item");

    items.forEach((item)=> {
        let text = item.textContent.toLowerCase();
        let index = text.indexOf(searchTerm);

        if(index !== -1 && searchTerm !== ""){
            const highlitedText = item.textContent.substring(index, index + searchTerm.length);
            item.innerHTML = item.textContent.replace(highlitedText, `<span class='highlight'>${highlitedText}</span>`)
        }
        else{
            item.innerHTML = item.textContent;
        }
    })
});