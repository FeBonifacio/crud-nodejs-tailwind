import prismaClient from "../prisma";
import { Users } from "../types";

class CreateCustomerService {
    async execute({ name, email }: Users) {

        if(!name || !email) {
            throw new Error("Preencha todos os nomes!");
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true,
            }
        })

        return customer;
    }
}

export { CreateCustomerService }