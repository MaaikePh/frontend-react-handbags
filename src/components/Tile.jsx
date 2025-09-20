import './Tile.css'

function Tile({ tileTitle, tileParagraphs = [], tileImage, tileImageAltText}) {
    return (
            <section>
                {tileImage && <img src={tileImage} alt={tileImageAltText} />}
                <h2>{tileTitle}</h2>
                {tileParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                    ))}
            </section>
    )
}

export default Tile;