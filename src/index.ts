import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface createParams {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
interface updateParams {
  email : string
  firstName?: string;
  lastName?: string;
}

// create user
async function createUser({
  email,
  firstName,
  lastName,
  password,
}: createParams) {
  const res = await prisma.user.create({
    // specify the data in the data obj
    data: {
      firstName,
      lastName,
      email,
      password,
    },
    // specify what you want to select and return
    select: {
      id: true,
      password: true,
    },
  });
  console.log(res);
}
// createUser({
//   firstName: "hitler",
//   lastName: "sharma",
//   email: "hitler5@gmail.com",
//   password: "hitler1123",
// });


// update user
async function updateUser({ email,firstName, lastName }: updateParams) {
  const res = await prisma.user.update({
    data: {
      firstName,
      lastName,
    },
    where: {
      email 
    },
  });
  console.log(res);
}
// updateUser({
//   email : "hitler@gmail.com",
//   firstName : "swastik",
//   lastName : "Modi"
// })


// get user detail
async function getUser(firstName : string){
  // get multiple user
  const findMultipleUsers = await prisma.user.findMany({
    where : {
      firstName 
    },
  })


 // find single user
  const firstSingleUsers = await prisma.user.findFirst({
    where : {
      firstName 
    },
  })

  console.log(findMultipleUsers);
  console.log(findMultipleUsers);
}
// getUser("hitler")


