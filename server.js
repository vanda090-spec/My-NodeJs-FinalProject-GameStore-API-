import {myApp} from "./myApp.js";
import {port} from "./config/index.js"
import { checkConnection } from "./services/database/checkConnection.js";

await checkConnection();

myApp.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
});

