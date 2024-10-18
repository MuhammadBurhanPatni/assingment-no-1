

export default async function Gmail(){
    await new Promise((resolve) => 
        {setTimeout(resolve,5000)
        
    })

    return (<div >
        <h1 className="capitalize text-2xl text-cyan-400 hover: animate-rotate">this is Gmail page</h1>
        </div>)
}