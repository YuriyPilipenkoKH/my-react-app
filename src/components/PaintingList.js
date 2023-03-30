import Painting from "./components/Painting"

function PaintingList ({items}) {

    <ul>
    {items.map(item => (
        <li key = {item.id}>
            <Painting
        
        url = {item.url}
        title = {item.title}  
        authorName = {item.author.tag}
        profileUrl = {item.author.url}
        price = {item.price}
        quantity= {item.quantity}   />
        </li>
    ))}
    </ul>
}

export default PaintingList