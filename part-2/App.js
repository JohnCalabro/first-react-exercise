const App = () => {
    return <div>
        <Tweet username="chickenguy1" name="Colt" date="08/01/23" message="Chickens are cool" />
        <Tweet username="supermario64" name="Mario" date="08/01/23" message="It's a me!" />
        <Tweet username="obi1kenobi" name="Ben" date="08/01/23" message="I have the higher ground!" />
        
    </div>
}

const container = document.getElementById("root");
console.log(container)
const root = ReactDOM.createRoot(container);
console.log(root)
root.render(<App />);