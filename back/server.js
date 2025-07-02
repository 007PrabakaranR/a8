// import express from "express"
// import cors from "cors"
// import dotenv from  "dotenv"
// import { ApolloServer } from "@apollo/server"
// import {expressMiddleware} from "@apollo/server/express4"


// import connect from "./connect/connect.js"
// import typeDefs from "./modelSchema/typeDefs.js"
// import resolvers from "./modelSchema/resolvers.js"


// const PORT = 8080
// const app = express()
// dotenv.config()

console.log("==========")
// app.use(cors())
// app.use(express.json())
// connect()


// app.get("/", (req,res)=>{
//     res.send("Hello Buddy!")
// })

// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// })
// await server.start()

// app.use("/graphql",expressMiddleware(server,{
//     context:(req)=>(req)
// }))

// app.listen(PORT,()=>{
//     console.log(`SERVER RUNNING :${PORT}`)
// })








console.log("LEO DASS")







import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4"
import typeDefs from "./modelSchema/typeDefs.js";
import resolvers from "./modelSchema/resolvers.js";
import connect from "./connect/connect.js"

const PORT = 8500;
const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
connect()



app.get('/',(req,res)=>{
    res.send("Hello Buddy!")
})

const server = new ApolloServer({
    typeDefs,
    resolvers
})
await server.start()

app.use("/graphql",expressMiddleware(server,{
    context:(req)=>(req)
}))


app.listen(PORT,()=>{
    console.log(`Server Run :${PORT}`)
})

