import express from 'express'
import { User } from '../models/user.js'
import { getAllUsers, registerUser, specialFunc, getUserDetails, updateUser, deleteUser } from '../controllers/user.js'

const router =express.Router()

router.get("/all", getAllUsers)

router.post("/new", registerUser)

router.get("/userid/special", specialFunc)

//alway use dynamic routing at the end as same equal routing may be redirected to dynamic one like "/userid/special"
// router.get("/userid/:id", getUserDetails)

// router.put("/userid/:id", updateUser)

// router.delete("/userid/:id", deleteUser)

router
    .route("/userid/:id")
    .get(getUserDetails)
    .put(updateUser)
    .delete(deleteUser)

export default router