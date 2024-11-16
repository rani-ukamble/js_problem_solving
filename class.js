class CalendarDay {
    // private fields
    #day;
    #month;
    #year;

    constructor(month, day, year) {
        this.#day = day;
        this.#month = month;
        this.#year = year;
    }

    toString() {
        return `${this.#day}-${this.#month + 1}-${this.#year}`;
    }
}

let d1 = new CalendarDay(0, 1, 2023);
console.log(d1.toString()); // Expected output: 1-1-2023
