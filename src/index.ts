import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient()

const main = async () =>{
    // const allUsers = await prisma.user.findMany()
    // console.log(allUsers);

    // const user = await prisma.user.create({
    //     data:{
    //         email:"rony3@test.com",
    //         name: "Rony",
    //         age:56
    //     }
    // })
    // console.log(user);
    const port = process.env.PORT || 8000
    app.listen(port, () =>{
        console.log(`Server running at ${port}`)
    })
}

main()