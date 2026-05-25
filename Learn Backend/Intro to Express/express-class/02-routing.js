const express = require('express')


function block_1_httpMethods(){
    return new Promise((resolve) => {
        const app = express()
        app.use(express.json())

        const routes = {
            1: {
                id: 1,
                name: "Dadar Andhri Express",
                direction: "North"
            },
            2: {
                id: 2,
                name: "Bandra-Kurla Shuttle",
                direction: "East"
            }
        }

        let nextid = 3

        // list all train
        app.get("/routes", (req, res) => {
            res.json(Object.values(routes))
        })

        // single route by id
        app.get('/routes/:id', (req, res) => {
            // const {id} = req.params
            // const route = routes[id]

            const route = routes[req.params.id]
            if(!route) return res.status(404).json({error: "No train on this id"});
            res.json(route)

        })

        app.post('/routes', (req, res) => {
            //no validation, no zod
            const newRoute = {id: nextid++, ...req.body}
            routes[newRoute.id] = newRoute;
            res.status(201).json(newRoute)
        })

        app.put("/routes/:id", (req, res) => {
            const id = req.params.id
            if(!routes[id]) return res.status(404).json({error: "Something went wrong nhi bhejna h"});
            routes[id] = {id: Number(id), ...req.body}

        })
        app.patch("/routes/:id", (req, res) => {
            const id = req.params.id
            if(!routes[id]) return res.status(404).json({error: "Something went wrong nhi bhejna h"});
            //TODO complete this route

        })
        app.delete("/routes/:id", (req, res) => {
            const id = req.params.id
            if(!routes[id]) return res.status(404).json({error: "Something went wrong nhi bhejna h"});
            delete routes[id]
            res.status(204).end()

        })



        const server = app.listen(0, async () => {
            const port = server.address().port
            const base = `http://127.0.0.1:${port}`;

            try {
                //TODO
                const listRes = await fetch(`${base}/routes`)
                const listData = await listRes.json()

                const createRes = await fetch(`${base}/routes`, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json",
                        body: JSON.stringify({
                            name: "Colaba-Worli",
                            direction: "South"
                        })
                    }
                })
                const created = await createRes.json()

                
            } catch (error) {
                console.log(error)
            }

            server.close(() => {
                console.log("Block 1 served....")
                resolve()
            })


        })


    })
}


function block_1_httpMethods(){
    return new Promise((resolve) => {
        const app = express()
        app.use(express.json())
// /files/docs/readme.txt
// /files/assets/style.css
        app.get('/files/*filepath', (req, res) => {
            const filepath = req.params.filepath
            res.json({filepath, type: "wildcard"})
        })

        app
            .route("/schedule")
            .get((req, res) => {})
            .post((req, res) => {})
            .put((req, res) => {})
            .delete((req, res) => {})

        app.use("/api", (req, res) => {
            //its a prefetch match
        })



        const server = app.listen(0, async () => {
            const port = server.address().port
            const base = `http://127.0.0.1:${port}`;

            try {
                //TODO
                

                
            } catch (error) {
                console.log(error)
            }

            server.close(() => {
                console.log("Block 1 served....")
                resolve()
            })


        })


    })
}

async function main(){
    await block_1_httpMethods()


    process.exit(0)
}

main()