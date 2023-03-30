import  PropTypes  from "prop-types"
// import defaultImg  from "./drop.jpg";

const Painting = ({id,url,title,authorName='unknown',price,profileUrl,quantity}) => {

    return (<div>
    <img src={url} alt={title} width="480"/>
    <h2>{title}</h2>
    <p>
      Author: <a href={url}>{authorName}</a>
    </p>
    <p>Price:{price} creds </p>
    <p>Accessibility: {quantity < 10 ? 'ends up' : 'in the presence'} </p>
    <button type="button" > Add to cart</button>
    </div>)
    }
    
    Painting.propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }
    export default Painting 