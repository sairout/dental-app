import axios from 'axios';

function Demo(){
    return (
        <div>
            <button onClick={getSuccessApi} >Okay</button>
            <button onClick={getFailedApi} >Not Okay</button>
        </div>
        
    );

    function getSuccessApi(){
        axios.get("https://demo-spring.azurewebsites.net/").then(response => console.log(response));
    }
    
    function getSuccessApi(){
        axios.get("https://demo-spring.azurewebsites.net/asd").then(response => console.log(response));
    }
}

export default Demo;