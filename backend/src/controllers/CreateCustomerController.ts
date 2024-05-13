import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from '../services/CreateCustomerService';
import { Users } from "../types";


class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, email } = request.body as Users;

        const customerService = new CreateCustomerService();

        const customer = await customerService.execute({ name, email });

        reply.send(customer);
    }
}

export { CreateCustomerController }