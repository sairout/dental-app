import axios from 'axios';

function Demo(){
    return (
        <div>
            <button onClick={getApi} >Click Me</button>
        </div>
    );

    function getApi(){
        axios.get("https://demo-spring.azurewebsites.net/home").then(response => console.log(response));
      }
}

export default Demo;