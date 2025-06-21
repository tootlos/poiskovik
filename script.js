const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const select = document.querySelector(".search__select");

button.addEventListener("click", submitRequest);

function submitRequest(event) {
    event.preventDefault();

    const value = input.value;
    const searchEngine = select.value;

    let params;
    let domen;

    if (searchEngine === "google" || searchEngine === "bing") {
        params = "/search?q=";
        domen = "com"
    } else if (searchEngine === "yandex") {
        params = "/search?text=";
        domen = "ru"
    } else if (searchEngine === "duckduckgo") {
        domen = "com"
        params = "?q="
    }


    window.location.href = `https://www.${searchEngine}.${domen}/${params}` + value;


}