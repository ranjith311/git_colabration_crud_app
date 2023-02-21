export const login = async (req,res,next)=>{
    try {
        const {email, password}= req.body;
        const isExist = await User.findOne({email:email})
        if(isExist) throw res.status(409).json({msg:"user already exists"})
    } catch (error) {
        
    }
}

export const register = (req, res, next )=>{
   
    try {
        
    } catch (error) {
        
    }
      
}