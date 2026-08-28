const ROAM_STORAGE_KEY = "roam_data";


const defaultData = {
    trips: [],
    savedPlaces: [],
    bookings: [],
    photos: [],
    expenses: [],
    settings: {
        name: "",
        currency: "EUR"
    }
};


function loadData() {

    try {

        const saved = localStorage.getItem(ROAM_STORAGE_KEY);

        if (!saved) {
            return structuredClone(defaultData);
        }

        const parsed = JSON.parse(saved);

        return {
            ...structuredClone(defaultData),
            ...parsed
        };

    } catch (error) {

        console.error("Errore caricamento dati ROAM:", error);

        return structuredClone(defaultData);
    }
}


function saveData(data) {

    try {

        localStorage.setItem(
            ROAM_STORAGE_KEY,
            JSON.stringify(data)
        );

        return true;

    } catch (error) {

        console.error("Errore salvataggio dati ROAM:", error);

        return false;
    }
}


function getTrips() {
    return loadData().trips;
}


function addTrip(trip) {

    const data = loadData();

    data.trips.push(trip);

    saveData(data);

    return trip;
}


function deleteTrip(tripId) {

    const data = loadData();

    data.trips = data.trips.filter(
        trip => trip.id !== tripId
    );

    saveData(data);
}


function getNextTrip() {

    const trips = getTrips();

    const today = new Date();

    const futureTrips = trips
        .filter(trip => new Date(trip.startDate) >= today)
        .sort(
            (a, b) =>
                new Date(a.startDate) -
                new Date(b.startDate)
        );

    return futureTrips[0] || null;
}


function addSavedPlace(place) {

    const data = loadData();

    const exists = data.savedPlaces.some(
        item => item.id === place.id
    );

    if (!exists) {
        data.savedPlaces.push(place);
        saveData(data);
    }
}


function removeSavedPlace(placeId) {

    const data = loadData();

    data.savedPlaces =
        data.savedPlaces.filter(
            place => place.id !== placeId
        );

    saveData(data);
}


function getSavedPlaces() {
    return loadData().savedPlaces;
}


function addExpense(expense) {

    const data = loadData();

    data.expenses.push(expense);

    saveData(data);
}


function deleteExpense(expenseId) {

    const data = loadData();

    data.expenses =
        data.expenses.filter(
            expense => expense.id !== expenseId
        );

    saveData(data);
}


function getExpenses() {
    return loadData().expenses;
}


function saveSettings(settings) {

    const data = loadData();

    data.settings = {
        ...data.settings,
        ...settings
    };

    saveData(data);
}


function getSettings() {
    return loadData().settings;
}
