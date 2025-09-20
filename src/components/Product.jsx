import './Product.css'

function Product({productImage, imageAltText, productTitle, productPrice, isBestSeller, isNewCollection}) {

    return (
        <>
            <article>
                {isBestSeller && <span>Best seller</span>}
                {isNewCollection && <span>New collection</span>}
                <img src={productImage} alt={imageAltText}/>
                <p>{productTitle}</p>
                <h4>{productPrice}</h4>
            </article>
        </>
    )
}

export default Product;