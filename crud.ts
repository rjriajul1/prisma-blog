import { prisma } from "./lib/prisma";

async function run() {

    const createUser = await prisma.user.create({
        data: {
            name: "Jankar",
            email: "jankar@gmail.com"
        }
    }) 
    console.log("created User", createUser);
}

run()
