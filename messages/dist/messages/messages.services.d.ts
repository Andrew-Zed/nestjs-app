import { MessageRepository } from "./messages.repository";
export declare class MessagesService {
    messageRepo: MessageRepository;
    constructor(messageRepo: MessageRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    createMessages(content: string): Promise<void>;
}
