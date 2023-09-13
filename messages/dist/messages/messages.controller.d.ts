import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.services';
export declare class MessagesController {
    messageService: MessagesService;
    constructor(messageService: MessagesService);
    listMessages(): Promise<any>;
    createMessage(body: CreateMessageDto): Promise<void>;
    getMessage(id: string): Promise<any>;
}
