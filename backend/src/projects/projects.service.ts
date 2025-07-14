import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>,
    ) { }

    async findAll(): Promise<Project[]> {
        return this.projectRepository.find({
            where: { isActive: true },
            order: { createdAt: 'DESC' },
        });
    }

    async findOne(id: number): Promise<Project | null> {
        return this.projectRepository.findOne({
            where: { id, isActive: true },
        });
    }

    async create(projectData: Partial<Project>): Promise<Project> {
        const project = this.projectRepository.create(projectData);
        return this.projectRepository.save(project);
    }

    async update(id: number, projectData: Partial<Project>): Promise<Project | null> {
        await this.projectRepository.update(id, projectData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.projectRepository.update(id, { isActive: false });
    }
}