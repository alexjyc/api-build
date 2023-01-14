import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
    @Get()
    home() {
        return 'Alex Car database API';
    }
}
