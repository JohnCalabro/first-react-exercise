const App = () => {
    return <div>
        <FirstComponent />
        <NamedComponent name="Bob" />
    </div>
}

const container = document.getElementById("root");
console.log(container)
const root = ReactDOM.createRoot(container);
console.log(root)
root.render(<App />);