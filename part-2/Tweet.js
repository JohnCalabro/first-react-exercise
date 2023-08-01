const Tweet = (props) => {
    
    return (<div>
       <p><b>Username: {props.username}</b></p>
       <p>Name: {props.name}</p>
       <p>Date: {props.date} </p>
       <p>Message: {props.message}</p>
    </div>)
}

const div = document.getElementById("root");

const root = ReactDOM.createRoot(div);
console.log(root)
root.render(<App />);