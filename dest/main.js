"use strict";
// function
function printLocation(location) {
    switch (location.state) {
        case 'Loading':
            console.log(location.state);
            break;
        case 'Success':
            console.log(location.coords.lat, location.coords.lon);
            break;
        case 'Error':
            console.log(location.error.message);
            break;
    }
}
//# sourceMappingURL=main.js.map