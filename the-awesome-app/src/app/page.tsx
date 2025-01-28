import { Counter } from "@/components/Counter";
//import {Message}  from "@/components/Message";


export default function Home() {
  return (
    <div>
      <h3>Home</h3>

      {/* <Message text="Hello React" />
      <Message text="Hello Next.js" color="green"/> */}
     
      <Counter initialValue={5}/>
      <Counter initialValue={10}/>
    </div>
  );
}
