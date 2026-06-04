import  {User}  from "../../models/users/users.models";


export const userDal={
    getUsers:()=>User.findAll(),
    registerUser:(userData)=>User.create(userData),
    getUserById:(id)=>User.findByPk(id),
    updateUser:async(id,userData)=>{
        await User.update(userData,{where:{id}});
        return User.findByPk(id);
    },
    deleteUser:(id)=>{
        return User.destroy({where:{id}});
    }
};