document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});


function initializeApp() {

    renderNextTrip();

    setupDestinationSearch();

    setupNavigation();

}


function setupNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";

    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            const href =
                item.getAttribute("href");

            item.classList.toggle(
                "active",
                href === currentPage
            );

        });
}


function navigate(url) {

    window.location.href = url;

}


function setupDestinationSearch() {

    const input =
        document.getElementById("destinationInput");

    if (!input) return;

    input.addEventListener("keydown", event => {

        if (event.key === "Enter") {

            searchDestination();

        }

    });

}


function searchDestination() {

    const input =
        document.getElementById("destinationInput");

    if (!input) return;

    const destination =
        input.value.trim();

    if (!destination) {

        input.focus();

        return;

    }

    localStorage.setItem(
        "roam_explore_destination",
        destination
    );

    navigate("esplora.html");

}


function renderNextTrip() {

    const container =
        document.getElementById("nextTripContainer");

    if (!container) return;

    const trip =
        getNextTrip();

    if (!trip) {

        container.innerHTML = `
            <div class="empty-state">

                <strong>
                    Nessun viaggio in programma
                </strong>

                <p>
                    Inizia a organizzare la tua prossima avventura.
                </p>

            </div>
        `;

        return;
    }


    const date =
        new Date(trip.startDate);

    const formattedDate =
        date.toLocaleDateString(
            "it-IT",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    container.innerHTML = `

        <article
            class="trip-card"
            onclick="navigate('viaggi.html')"
        >

            <div class="trip-content">

                <span class="trip-label">
                    PROSSIMO VIAGGIO
                </span>

                <h3>
                    ${escapeHTML(trip.destination)}
                </h3>

                <p>
                    ${formattedDate}
                    ${trip.endDate ? ` — ${formatDate(trip.endDate)}` : ""}
                </p>

            </div>

        </article>

    `;
}


function formatDate(dateString) {

    return new Date(dateString)
        .toLocaleDateString(
            "it-IT",
            {
                day: "numeric",
                month: "short"
            }
        );

}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}
