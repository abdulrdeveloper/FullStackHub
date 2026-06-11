const fs = require("fs")      // File system operations ke liye — files read/write karna
const path = require("path")  // File paths handle karne ke liye
const os = require("os")      // Operating system ki info lene ke liye

// Yeh 3 modules Node.js mein sabse zyada use hotay hain

// Node.js version check karna
console.log("NodeJS: ", process.versions.node); 
// process.versions object mein Node ke saath saath V8, libuv etc sab ki versions hoti hain

console.log("V8: ", process.versions.v8);     // V8 engine ki version
console.log("libuv: ", process.versions.uv);  // LIBUV library ki version
console.log("Platform: ", process.platform);  // OS platform — jaise 'linux', 'win32', 'darwin'
console.log("CPU: ", os.cpus().length);        // Computer mein kitne CPU cores hain


/*
=== Node.js ke 3 Core Engines ===

1. V8 Engine (Google ka banaya hua)

   - Yeh wahi engine hai jo Chrome browser mein bhi use hoti hai
   - Kaam: JavaScript code ko seedha Machine Code mein convert karta hai (JIT compilation)
   - Iske paas 2 cheezein hain:
       * Heap     → memory manage karta hai (variables, objects yahan store hotay hain)
       * Call Stack → functions ka order track karta hai (kaun sa function chal raha hai)
   - YEH SIRF JS chalata hai — files, network, timers yeh LIBUV karta hai

2. LIBUV (C language mein likhi library)

   - Node.js ki async magic yahan hoti hai
   - 4 kaam karta hai:
       * Event Loop   → JS ke async tasks manage karta hai (setTimeout, Promises etc)
       * Thread Pool  → bhaari kaam background mein karta hai (file read, compression etc)
       * Async I/O    → files aur network requests OS se handle karta hai
       * DNS Lookup   → domain name ko IP address mein convert karta hai
   - Iske bina Node.js single-threaded hota aur sab kuch ruk jaata

3. Node.js Bindings (C++ mein likha hua)

   - Yeh ek BRIDGE hai JS aur LIBUV ke darmiyan
   - Jab bhi aap koi async kaam karte hain (jaise fs.readFile), woh pehle Bindings se guzarta hai
   - Flow:  JS Code → Bindings → LIBUV → Operating System → wapas result JS ko

=== Poora Flow Summary ===

Aap JS likhte hain
      ↓
V8 Engine usse Machine Code banata hai
      ↓
Koi async kaam hai? (file, network, timer?)
      ↓
Node.js Bindings (C++) usse handle karta hai
      ↓
LIBUV OS ko kaam deta hai
      ↓
OS kaam karta hai
      ↓
Result wapas aata hai → aapka callback / Promise resolve hota hai
*/