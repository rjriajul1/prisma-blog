import { prisma } from "./lib/prisma";

async function run() {

    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Jankar",
    //         email: "jankar@gmail.com"
    //     }
    // }) 
    // console.log("created User", createUser);


    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "This is title",
    //         content: "This is a content",
    //         authorId: 1
    //     }
    // })
    // console.log("created Post", createPost);

//     const createProfile = await prisma.profile.create({
//         data: {
//             bio: "This is a bio!",
//             dateOfBirth: new Date("10-08-2004"),
//             userId: 2
//         }
//     })
//  console.log("create Profile", createProfile);

// const users = await prisma.user.findMany({
    // include: {
    //     posts: true,
    //     profile: true
    // }

//     select: {
//         id: true,
//         name: true,
//         email: true,
//         posts: true,
//         profile: true
//     }
// })
// console.dir(users, {depth: Infinity});

// const singleUser = await prisma.user.findUnique({
//     where: {
//         id: 1
//     }
// })
// console.log(singleUser);


// const updateUser = await prisma.profile.update({
//     where: {
//         userId:1
//     },
//     data: {
//         bio: "web & backend",
//         dateOfBirth: new Date("10-08-2004")
//     },
//     select: {
//         id: true,
//         bio: true,
//         user: {
//             select: {
//                 name: true,
//                 email: true
//             }
//         }
//     }
// })

// console.log(updateUser);


// const singleUser = await await prisma.user.findUnique({
//     where: {
//         id:1
//     },
//     include: {
//         posts: true,
//         profile: true
//     }
// })

// console.log(singleUser);

// const upsertUser = await prisma.user.upsert({
//     where: {
//         email: "riajul2.karim52@gmail.com"
//     },
//     update: {
//         name: " Rj Riajul"
//     },
//     create: {
//         name: "Riajul Karim",
//         email: "riajul3.karim52@gmail.com"
//     }
// })

// console.log(upsertUser);





}

run()
