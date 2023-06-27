import Link from 'next/link'

const TheHeader = () =>{
    return(
        <header> 
            <ul>
            <li><mark><a href="/">Home</a></mark></li>
            <li><mark><a href="/vagon">Vagon</a></mark></li>
            </ul>
            <hr></hr>
        </header>
    )
}


export {TheHeader};