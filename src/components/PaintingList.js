import Painting from "./components/Painting"
import PropTypes from "prop-types";

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

PaintingList.PropTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired, 
    }))
}
export default PaintingList