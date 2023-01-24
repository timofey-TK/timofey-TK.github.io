
function add(target) {
    var input = document.querySelector("." + target)
    input.innerHTML = Number(input.innerHTML) + 1
    document.cookie = target + "=" + input.innerHTML
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options = {}) {
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}


var likes = getCookie("likes"), dislikes = getCookie("dislikes"), neutrals = getCookie("neutrals"),
    likeText = document.querySelector(".likes"),
    dislikeText = document.querySelector(".dislikes"),
    neutralText = document.querySelector(".neutrals")
document.addEventListener("DOMContentLoaded", () => {
    if (likes) {
        likeText.innerHTML = likes
    }
    if (dislikes) {
        dislikeText.innerHTML = dislikes
    }
    if (neutrals) {
        neutralText.innerHTML = neutrals
    }

});
function reset() {
    neutralText.innerHTML = 0
    likeText.innerHTML = 0
    dislikeText.innerHTML = 0
    deleteCookie("likes")
    deleteCookie("dislikes")
    deleteCookie("neutrals")
}
