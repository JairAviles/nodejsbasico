const call = require("./src/call")

call.greet("Jair Aviles");

async function callWithPromise() {
    const fullName = await call.withPromise("Jair Israel", "Aviles Eusebio");
    console.log('FullName', fullName);
}

callWithPromise();