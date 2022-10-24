import { useState } from 'react';

const Home = () => {
    //this is reactive and updates after clicks
    const [view, setView] = useState('default view')
    const [controls, setControls] = useState([
        {title: 'IDAM 1.1', body: 'relates to lorem ipsum...', author: 'NIST'},
        {title: 'IDAM 1.2', body: 'relates to lorem ipsum...', author: 'NIST'}
    ])

    const handleClick = (name, e) => {
        setView(name + ' chosen');
        console.log('clicked: ' + name, e.target);
        <div>yooo</div>

    }

    return (
        <div className = "Home">
            <h2>Dashboard</h2>
            <p> { view } </p>
            <button onClick={(e) => handleClick('view controls', e)}>View Controls</button>
            <button onClick={(e) => handleClick('update controls', e)}>Update Controls</button>

        </div>
    );
}

export default Home;