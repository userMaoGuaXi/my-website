import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';

@Controller('api/projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Get()
    findAll(): Promise<Project[]> {
        return this.projectsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Project | null> {
        return this.projectsService.findOne(+id);
    }

    @Post()
    create(@Body() createProjectDto: Partial<Project>): Promise<Project> {
        return this.projectsService.create(createProjectDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProjectDto: Partial<Project>): Promise<Project | null> {
        return this.projectsService.update(+id, updateProjectDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.projectsService.remove(+id);
    }
}