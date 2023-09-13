export declare class MessageRepository {
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    createMessage(content: string): Promise<void>;
}
