import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.services';

@Controller('messages')
export class MessagesController {

    constructor(public messageService: MessagesService ) {
        
    }
    
    @Get()
    listMessages() {
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body : CreateMessageDto) {
        return this.messageService.createMessages(body.content)
    }
    
    @Get('/:id')
    async getMessage(@Param('id') id : string) {
        const message = await this.messageService.findOne(id);

        if(!message) {
            throw new NotFoundException('Message not found');
        }

        return message;
    }

}
