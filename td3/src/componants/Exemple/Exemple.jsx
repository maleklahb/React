import{useState} from "react";


function Formulaire() {
    const [nom, setNom] = useState("");
    const [age, setAge] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        console.log(e)
        alert("bonjour" + nom + "vous avez" + age + "ans");
        setNom("");
        setAge("");
    }
 return (
    <form onSubmit={handleSubmit}>
        <div>
            <h2>Formulaire d'inscription </h2>
         
                <label >Nom : </label>
                <input type="text" value={nom} 
                onChange={(e)=>setNom(e.target.value)}
                required
                />
                <br/><br/>
                
                <label >Age : </label>
                <input type="number" 
                value={age} 
                onChange={(e)=>setAge(e.target.value)} 
                required
                />
                <br/><br/>
                
                <button type="submit">valider</button>
            
        </div>
    </form>
    );
    }
    export default Formulaire;