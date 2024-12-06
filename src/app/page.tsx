import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <main>
      <header/>
      <section className="flex gap-6 items-center mt-10">
      <div>
        <h1 className="text-gray-400 font-bold 3xl">We are Provide Tarvlling Facilities</h1>
      <p className="text text-grey-900" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, deleniti accusamus magni quaerat minus a suscipit ipsum explicabo, totam, labore eveniet corporis temporibus earum voluptate in quisquam incidunt error. Reiciendis!</p>
      <button className="bg-gray-900 text-white py-2 mt-4" >View My work</button>
       </div>

         <div>
           <img 
           width={450}
           height={500}
           src="/img.5.png " alt="Hero" />
      </div>
    
      </section>
    </main> 
    
     );
}
