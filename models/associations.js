// models/associations.js

import { User } from ".././models/users/users.models.js";
import { Order } from "./orders/orders.model.js";
import { Games } from "./games/games.model.js";
import { Worker } from "./workers/workers.model.js";

User.hasMany(Order, { foreignKey: "userID" });
Order.belongsTo(User, { foreignKey: "userID" });

Games.hasMany(Order, { foreignKey: "gameID" });
Order.belongsTo(Games, { foreignKey: "gameID" });

Worker.hasMany(Order, { foreignKey: "workerID" });
Order.belongsTo(Worker, { foreignKey: "workerID" });