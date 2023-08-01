const Person = ({name, age, hobbies}) => {

    
    // console.log(hobbies)
    
    let msg;

    // let hobbies = hobbies.map(hobby => <li>{hobby}</li>);

    // .map causes all kinds of strange errors. If I try it up here
    // Person is magically undefined

    // if I try mapping inline in ul hobbies suddenly turn undefined. 

    if(name.length > 8){
       let shortName = name.slice(0,6)
       console.log(shortName)
       name = shortName
    }

    if(age >= 18){
        msg = "please go vote!"
    } else {
        msg = "you must be 18."
    }
    return <div>
        <p>Learn some information about this person {name}</p>
        <h3>{msg}</h3>
        
        <ul>{hobbies.map(h => (
            <li>
               
                <b>{h}</b>
                
            </li>
            )
            )}</ul>
        
    
    </div>
}




