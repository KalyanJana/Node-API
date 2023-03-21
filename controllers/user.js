import { User } from "../models/user.js"

export const getAllUsers = async(req, res)=>{

    const users = await User.find({})

    const keyword=req.query.keyword
    console.log(keyword)

    res.json({
        success:true,
        users:users,
    })
}

export const registerUser = async(req, res)=>{

    const {name, email, password}=req.body

    const users = await User.create({
        name,
        email,
        password,
    })

    res.status(201).cookie("tempi","lol").json({
        success:true,
        message:"Register Successfully",
    })
}

export const specialFunc = (req,res)=>{
    res.json({
        success:true,
        message:"Just jocking"
    })
}

export const getUserDetails = async (req, res)=>{
    const {id}=req.params
    const user =await User.findById(id)

    res.json({
        success:true,
        user:user
    })
} 

export const updateUser = async (req, res)=>{
    const {id}=req.params
    const user =await User.findById(id)

    res.json({
        success:true,
        message:"Updated"
    })
}

export const deleteUser = async (req, res)=>{
    const {id}=req.params
    const user =await User.findById(id)

    // await User.deleteOne(id)

    res.json({
        success:true,
        message:"Deleted"
    })
}