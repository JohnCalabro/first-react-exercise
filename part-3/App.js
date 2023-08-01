const App = () => {
    return <div>
        <Person name="Bob" age="17" hobbies ={['skating', 'sleeping', 'driving', 'eating']}/>
        <Person name="Bartholomew" age="19" hobbies ={['biking', 'hiking', 'sky diving', 'cooking']}/>
        <Person name="Mario" age="42" hobbies ={['jumping', 'saving the princess', 'plumbing', 'making fun of Luigi']} />

        
    </div>
}

const container = document.getElementById("root");
console.log(container)
const root = ReactDOM.createRoot(container);
console.log(root)
root.render(<App />);