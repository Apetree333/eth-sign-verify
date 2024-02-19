let 
sign_verify =
require('./index.js');sign_verify.
    signMessage
("Test Message", 
 "0x0123456789012345678901234567890
 123456789012345678901234567890123")
    .then(sig 
        => {console.log
(sig); return 
sign_verify.verify_Message
("Test Message", 
 sig, "0x1479169726
 "0E4c9A71
 "f18484C
"9f997B
308e59325") 
    }).then
(
console.log
    );
