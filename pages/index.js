import Head from 'next/head'
import { getData } from "../lib/sheet";

export default function Test({data}){
  let id =1
  return (
    <div>
  <h2>results</h2>
  {data.map((tool) => {
					return (
						<div
							key={tool.name}
							className=" m-2 text-4xl hover: cursor-pointer"
						>
							<div className="text-center flex justify-center items-center rounded-md border-gray-500  border-solid border-2 w-full h-full">
								{tool.name}<br/>
								{tool.link}<br/>
								{tool.category}
							</div>
						</div>
					);
				})}
    </div>
  )
}


export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const data = await getData();

    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: { data },
      revalidate:10,
    };
  }