import { useLoaderData, useParams } from "react-router-dom";

export default function ServiceDetails(){
  const { id } = useParams();
  const service = useLoaderData();
  console.log("services:",service[id])

  return (
    <div>
      <h2>
        <span>Name: {service[id].name}</span>
      </h2>
      <p>
        <span> Email: {service[id].email}</span> 
      </p>
      <p>
        <span>CatchPhrase: {service[id].company.catchPhrase}</span>
      </p>
    </div>
   )
}

export  async function serviceDetailsLoader({ params }){
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`,{cache:"no-cache"});
  return res.json();
};