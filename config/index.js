import "dotenv/config.js"; 


export const PORT=process.env.PORT || 3001;
export const JWT_Secret=process.env.JWT_Secret

export default PORT;