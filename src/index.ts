import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface createParams {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  isDisable : boolean
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
//   email: "hitler4@gmail.com",
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

// delete user
async function deleteUser(userId : number){
  const res = await prisma.user.delete({
    where : {
      id : userId
    }
  })
  console.log(res);
}
// deleteUser(1)


// soft delete user - hide them by creating a newfield isDisable and dont delete user completely
async function softDelete(userId : number){
  const res = await prisma.user.update({
    data : {
      isDisable : true
    },
    where : {
      id : userId
    }
  })
  console.log(res);
}
softDelete(2)

