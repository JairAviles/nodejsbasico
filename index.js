const call = require("./src/call");

call.withCallback("Jair Aviles", call.sync);

call.withPromise("Jair Aviles")
  .then(name=> {console.log(name)});