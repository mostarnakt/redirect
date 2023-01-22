const NEW_URL = "https://www.zahradkari.cz/zo/klatovy/";

function redirectTo(url) {
	window.location = url;
}

function redirectToNew() {
	redirectTo(NEW_URL);
}

redirectTo(NEW_URL);

