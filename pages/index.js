import Head from 'next/head'
import { getToolData } from "../lib/data";

export default function Test({data}){
  let id =1
  return (
    <div>
  <h2>results</h2>
{data.map((tool,id)=>(
  <li key={id}>
    <h3>{tool.name}</h3>
    <span>{tool.category}</span>
  </li>
))}
    </div>
  )
}


export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const data = await getToolData();
  
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: { data },
      revalidate: 10, 
    };
  }
