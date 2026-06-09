import { User } from "./users/users.models.js"
import { Order } from "./orders/orders.model.js";
import { Games } from "./games/games.model.js";
import { Worker } from "./workers/workers.model.js";

User.hasMany(Order, { foreignKey: "userID" });
Order.belongsTo(User, { foreignKey: "userID" });

Games.hasMany(Order, { foreignKey: "GameID" });
Order.belongsTo(Games, { foreignKey: "GameID" });

Worker.hasMany(Order, { foreignKey: "WorkerID" });
Order.belongsTo(Worker, { foreignKey: "WorkerID" });