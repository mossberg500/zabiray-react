import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Technologies =  () => {
    return(
        <div className="App">
            <ui>
                <li>HTML</li>
                <li>JS</li>
            </ui>
        </div>
    )
};
const Header = () => {
    return (
        <div>
            <p><a href='#'>Home</a></p>
            <p><a href='#'>New Feed</a></p>
            <p><a href='#'>Message</a></p>
        </div>
    )
};

export default App;
