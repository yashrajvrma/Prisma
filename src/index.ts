import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface createParams {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
interface updateParams {
  email: string;
  firstName: string;
  lastName: string;
}

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
createUser({
  firstName: "hitler",
  lastName: "sharma",
  email: "hitler3@gmail.com",
  password: "hitler1123",
});

async function updateUser({ email, firstName, lastName }: updateParams) {
  prisma.user.update({
    data: {
      email,
      firstName,
      lastName,
    },
    where: {
      email,
    },
  });
}
