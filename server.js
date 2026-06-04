import {myApp} from "./myApp.js";
import {Port} from "./config/index.js"



myApp.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
});

