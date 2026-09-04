import { createServer } from 'node:http'
import { createApplication } from './app/index'

async function main() {
    try {
        const server = createServer(createApplication())
        const PORT: number = 8080

        server.listen(PORT, () => {
            console.log(`Http server is running on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(`Error starting http server`)
        throw error
    }
}

main()