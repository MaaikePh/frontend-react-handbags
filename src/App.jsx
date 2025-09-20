import './App.css';
import Button from './components/Button.jsx';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import Product from './components/Product.jsx';

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button label={'to the collection'} disabled={false} />
                <Button label={'shop all bags'} disabled={false} />
                <Button label={'pre-orders'} disabled={true} />
            </nav>
            <main>
                <Product productImage={bag1} imageAltText={'The handy bag'} productTitle={'The handy bag'} productPrice={'€400,-'} isBestSeller={true} isNewCollection={false}/>
                <Product productImage={bag2} imageAltText={'The stylish bag'} productTitle={'The stylish bag'} productPrice={'€250,-'} isBestSeller={true} isNewCollection={false}/>
                <Product productImage={bag3} imageAltText={'The simple bag'} productTitle={'The simple bag'} productPrice={'€300,-'} isBestSeller={false} isNewCollection={true}/>
                <Product productImage={bag4} imageAltText={'The trendy bag'} productTitle={'The trendy bag'} productPrice={'€150,-'} isBestSeller={false} isNewCollection={true}/>
            </main>
        </>
    )
}

export default App
