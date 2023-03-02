var searchFormEl = document.querySelector('#city-search');


function handleSearchFormSubmit(event) {
    console.log(event)
    event.preventDefault();

    var searchInputVal = document.querySelector('#chosen-city').value

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    } else {
        console.log(searchInputVal)
    }

    //   var pastSearches = document.querySelector('.past-searches');
    //   var searchValue = document.createElement('button');
    //     searchValue.innerText = searchInputVal
    //     pastSearches.appendChild(searchValue)

    putInLocalStorage(searchInputVal)
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);



// handling local storage

function putInLocalStorage(searchInputVal) {
    if (!localStorage.getItem("history")) {
        let arr = [searchInputVal]
        localStorage.setItem("history", JSON.stringify(arr));
    } else {
        let arr = JSON.parse(localStorage.getItem("history"));
        arr.push(searchInputVal);
        localStorage.setItem("history", JSON.stringify(arr));
    }

    renderText()
}


// takes local history and displays it as history on screen as a button

function renderText() {
    let localHistory = JSON.parse(localStorage.getItem("history"));
    var pastSearches = document.querySelector('.past-searches');
    pastSearches.innerHTML = ""

    for (let i = 0; i < localHistory.length; i++) {
        var searchLocalHistory = document.createElement('button');
        searchLocalHistory.addEventListener("click", handleSearchFormSubmit)
        searchLocalHistory.innerText = localHistory[i]
        pastSearches.appendChild(searchLocalHistory)
    }

    // loop through it

    // append it to the dom as the inner text of a button

    // for each button call the handleSearchFormSubmit function onclick

}


function handleButtonClick(event){
    let buttonText = event.target.innerText
    let buttonEl = document.createElement('button');
    button.appendChild()


}


renderText()