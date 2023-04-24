import { Student } from "../../domain/entitles/student";

export interface StudentsRepository {
    findById(id: string): Promise<Student | null>;
}