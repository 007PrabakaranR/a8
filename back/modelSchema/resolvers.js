// import schemas from "./mySchema.js";

// const resolvers ={
//     Query:{
//         getUser:async()=>{
//             try {
//                 return schemas.find()
//             } catch (error) {
//                 console.log(error.message)
//             }
//         }
//     },
//     Mutation:{
//         addUser:async(_,{data})=>{
//             try {
//                 const a = new schemas(data)
//                 return await a.save()
//             } catch (error) {
//                 console.log(error.message)
//                 return []
//             }
//         },
//         updateUser:async(_,{id,data})=>{
//             try {
//                 const a = await schemas.findByIdAndUpdate(id,data,{new:true})
//                 return await a;
//             } catch (error) {
//                 console.log(error.message)
//             }
//         },
//         deleteUser:async(_,{id})=>{
//             try {
//                 await schemas.findByIdAndDelete(id)
//                 return "User Deleted!!"
//             } catch (error) {
//                 console.log(error.message)
//             }
//         }
//     }
// }

// export default resolvers;

















import schemas from "./mySchema.js";

const resolvers = {
Query:{
    getUser:async()=>{
        try {
            return await schemas.find()
        } catch (error) {
            console.log(error.message)
        }
    }
},
Mutation:{
    addUser:async(_,{data})=>{
        try {
            const a = new schemas(data)
            return await a.save()
        } catch (error) {
            console.log(error.message)
        }
    },

    updateUser:async({id,data})=>{
        try {
            return await schemas.findByIdAndUpdate(id,data,{new:true})
        } catch (error) {
            console.log(error.message)
        }
    },

    deleteUser:async({id})=>{
        try {
            await schemas.findByIdAndDelete(id)
            return "User Deleted!!!"
        } catch (error) {
            console.log(error.message)
        }
    }
}
}

export default resolvers
























