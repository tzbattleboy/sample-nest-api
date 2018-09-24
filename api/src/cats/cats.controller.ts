import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service'
import { from } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
    @Get()
    findAll() {
        return 'This action returns all cats';
    }
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
        return 'This action returns all cats';
    }
}
