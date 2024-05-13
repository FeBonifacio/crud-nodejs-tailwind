import { FastifyRequest, FastifyReply } from "fastify";
import { UserId } from './../types/index';
import { DeleteCustomerService } from "../services/DeleteCustomerService";


class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as UserId;

        const customerServiceDelete = new DeleteCustomerService();

        const customer = await customerServiceDelete.execute({ id });

        return reply.send(customer);
    }
}

export { DeleteCustomerController }




