export default async function AboutPage(){

    console.log("rendering About Page");

    //simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 5000));
    //throw new Error("Something went wrong");
    return (
        <div>
            <h3>About</h3>
            <p>This is Next.js 15 application</p>
        </div>
    )
}