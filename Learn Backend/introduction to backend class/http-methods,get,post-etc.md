---------------------------------- HTTP METHODS ---------------------------------


i)    GET        (read/retrieve)
ii)   POST       (create)
iii)  PUT        (replace)
iv)   PATCH      (update)
v)    DELETE     (remove)
vi)   HEAD       (only header check)
vii)  OPTIONS    (asked allowd methods from server)

ham jab requestkit / postman mai work krtay hain to waha se ek chota sa subject ata he http ke methods, (kabhi kabhi inko verb bi bol dete hain) 

---------------------------------------------------------------------------------


i) GET REQUEST


- to read/retrieve a resource
(iska main work he Data lena/ read krkay dikhana  like social media per Posts dekhna , Profiles load karna 📌 Example: GET /posts )

- no side effects 
( means jo function bnaya he vo khud mai hi rhay uska effect kisi doosray function per nai pray | just read krkay data lao kuch changes nai krna )

- IDEMPOTENT  (calling 10x = same as calling 1x)
( iska matlb he kay koi user agar kisi function ko call kr raha he 10 times to vo same as hona chahiyay 1 time )

- chacheable by browser and CDN 
(jab ham kisi cheez per hover krtay hain to vo behind the scene request behj deta he and jab ham click krtay hain to vo page fast load ho jata he | next js bohat achi pre fetch krta he GET request per )


ii) POST (Create a new Resource)


- Naya data banana
( Nayi post upload krna , Signup karna, 📌 Example: POST /posts )

- no IDEMPOTENT (creating/ uploading a post 10x = same uploading 10x)


iii) PUT (replace/updat a resource completely)

- send full object 
- usually IDEMPOTENT

iv) PATCH (partially updat a resource, send only changed field) , better then PUT in most cases

v) DELETE (remove a resource)

vi) HEAD (bohat rarely use kray gay)
- same as GET , but return only HEAD not whole body

vii) OPTIONS (bohat rarely use kray gay)
- CORS / REFLIGHT / Capibility check (will teach later in practical)


---------------------------------------------------------------------------------------------

jab backend se kaam ho kr client ko response milta he to kuch status code atay hain 

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

read more -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

