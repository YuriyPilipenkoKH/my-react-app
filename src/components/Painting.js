import  PropTypes  from "prop-types"

const Painting = ({url   ,title,authorName='unknown',price,profileUrl}) => {

    return (<div>
    <img src={url} alt={title} width="480"/>
    <h2>{title}</h2>
    <p>
      Author: <a href={url}>{authorName}</a>
    </p>
    <p>Price:{price} creds </p>
    <p>Accessibility: </p>
    <button type="button" > Add to cart</button>
    </div>)
    }
    
    Painting.propTypes = {
        url: PropTypes.string,
        title: PropTypes.string,
        authorName: PropTypes.string,
        price: PropTypes.number,
    }
    export default Painting 