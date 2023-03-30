import Painting from "./components/Painting"
import paintings from './paintings.json' 

export default function App() {
const isOnline = true

    return (<div> 
        {paintings.map(painting => <Painting
        key = {painting.id}
        url = {painting.url}
        title = {painting.title}  
        authorName = {painting.author.tag}
        profileUrl = {painting.author.url}
        price = {painting.price}
        quantity= {painting.quantity}   /> )}

         {/* <Painting
url = {paintings[0].url}
title = {paintings[0].title}  
        authorName = {paintings[0].author.tag}
profileUrl = {paintings[0].author.url}
price = {paintings[0].price}
quantity= {paintings[0].quantity}   />
         <Painting
url = {paintings[1].url}
title = {paintings[1].title}  
authorName = {paintings[1].author.tag}
profileUrl = {paintings[1].author.url}
price = {paintings[1].price}
quantity= {paintings[1].quantity}   />
         <Painting
url = {paintings[2].url}
title = {paintings[2].title}  
authorName = {paintings[2].author.tag}
profileUrl = {paintings[2].author.url}
price = {paintings[2].price}
quantity= {paintings[2].quantity}   /> */}
    </div>)
}