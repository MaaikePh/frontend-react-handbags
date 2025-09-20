import './App.css';
import Button from './components/Button.jsx';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import Product from './components/Product.jsx';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
import Tile from './components/Tile.jsx';

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button label='to the collection' disabled={false}/>
                <Button label='shop all bags' disabled={false}/>
                <Button label='pre-orders' disabled={true}/>
            </nav>
            <main>
                <Product productImage={bag1} imageAltText='The handy bag' productTitle='The handy bag'
                         productPrice='€400,-' isBestSeller={true} isNewCollection={false}/>
                <Product productImage={bag2} imageAltText='The stylish bag' productTitle='The stylish bag'
                         productPrice='€250,-' isBestSeller={true} isNewCollection={false}/>
                <Product productImage={bag3} imageAltText='The simple bag' productTitle='The simple bag'
                         productPrice='€300,-' isBestSeller={false} isNewCollection={true}/>
                <Product productImage={bag4} imageAltText='The trendy bag' productTitle='The trendy bag'
                         productPrice='€150,-' isBestSeller={false} isNewCollection={true}/>
            </main>
            <footer>
                <Tile tileTitle='The brand'
                      tileParagraphs={['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna sunt.', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna sunt.']}/>
                <Tile tileImage={brand} tileImageAltText='The brand'/>
                <Tile tileImage={ourStory} tileImageAltText='Our story'/>
                <Tile tileTitle='Our story'
                      tileParagraphs={['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At venium!']}/>
            </footer>
        </>
    )
}

export default App
