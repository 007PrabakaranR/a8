


// "use client"
// import { useGetUserQuery,useAddUserMutation } from "@/generated/graphql";
// import { useState } from "react";


// export default function Page() {
//     const {data,loading,error,refetch} = useGetUserQuery();
//     const [addUser] = useAddUserMutation()
//     console.log(data)
//     return (
//         <div>
//             <h2>Hello Buddy!!! user</h2>
//             <div>
//                 {data?.getUser?.map((k,i)=>(
//                     <div key={i}>
//                         <h2>{k?.age}</h2>
//                         <h3>{k?.fname}</h3>
//                         <h3>{(k?.isMarried)?"ok":"no"}</h3>
//                         <li><h2>{k?.hobby}</h2></li>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



// "use client";
// import { useGetUserQuery, useAddUserMutation } from "@/generated/graphql";
// import { useState } from "react";

// type Ds = {
//    fname:string,
//    age:number,
//    isMarried:boolean,
//    hobby:[string]
// }

// export default function Page() {

//   const { data, loading, error, refetch } = useGetUserQuery();
//   const [addUser] = useAddUserMutation();

//   const [fname,setFname] = useState<string>('')
//   const [age,setAge] = useState<number>(0)
//   const [isMarried,setIsmarried] = useState<boolean>(false)
//   const [hobby,setHobby] = useState<[string]>([])
 
//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p>Error loading users: {error.message}</p>;

//   console.log(data)

//   const myAdd = ()=>{
//     console.log("user Add")
//     addUser({
//         variables:{
//             fname,
//             age,
//             isMarried,
//             hobby
//         }
//     })
//   }

//   return (
//     <div>
//       <h2>Hello Buddy!!! user</h2>
//                   <div>
//                     <h1>The User config</h1>
//                     <input placeholder="Fname" onChange={(e)=>setFname(e.target.value)} value={fname}></input>
//                     <input type="number" placeholder="Age" onChange={(e)=>setAge(Number(e.target.value))} value={age}></input>
//                     <label><input type="checkBox"></input>Married?</label>
//                     <input type="list"></input>
//                     <button onClick={myAdd}>Add</button>
//                   </div>
//       <div>
//         {data?.getUser?.length ? (
//           data.getUser.map((user, i) => (
//             <div key={user?.id ?? i}>
//               <h2>Age: {user?.age}</h2>
//               <h3>Name: {user?.fname}</h3>
//               <h3>Married: {user?.isMarried ? "Yes" : "No"}</h3>
//               <li>
//                 <h2>Hobby: {user?.hobby}</h2>
//               </li>
//             </div>
//           ))
//         ) : (
//           <p>No users found.</p>
//         )}
//       </div>
//     </div>
//   );
// }










"use client";
import { useGetUserQuery, useAddUserMutation } from "@/generated/graphql";
import { useState } from "react";

export default function Page() {
  const { data, loading, error, refetch } = useGetUserQuery();
  const [addUser] = useAddUserMutation();

  const [fname, setFname] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isMarried, setIsMarried] = useState<boolean>(false);
  const [hobby, setHobby] = useState<string[]>([]);
  const [hobbyInput, setHobbyInput] = useState<string>("");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  const handleAddHobby = () => {
    if (hobbyInput.trim()) {
      setHobby([...hobby, hobbyInput.trim()]);
      setHobbyInput("");
    }
  };

  const myAdd = () => {
    console.log("user Add");
    addUser({
      variables: {
        fname,
        age,
        isMarried,
        hobby,
      },
    });
  };

  return (
    <div>
      <h2>Hello Buddy!!! user</h2>
      <div>
        <h1>The User Config</h1>
        <input
          placeholder="Fname"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(Number(e.target.value))}
          value={age}
        />
        <label>
          <input
            type="checkbox"
            checked={isMarried}
            onChange={(e) => setIsMarried(e.target.checked)}
          />
          Married?
        </label>
        <div>
          <input
            placeholder="Add a hobby"
            value={hobbyInput}
            onChange={(e) => setHobbyInput(e.target.value)}
          />
          <button onClick={handleAddHobby}>Add Hobby</button>
          <ul>
            {hobby.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
        <button onClick={myAdd}>Add</button>
      </div>

      <div>
        {data?.getUser?.length ? (
          data.getUser.map((user, i) => (
            <div key={user?.id ?? i}>
              <h2>Age: {user?.age}</h2>
              <h3>Name: {user?.fname}</h3>
              <h3>Married: {user?.isMarried ? "Yes" : "No"}</h3>
              <ul>
                {user?.hobby?.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}
