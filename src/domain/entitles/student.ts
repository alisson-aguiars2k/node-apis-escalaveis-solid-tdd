import { Entity } from "../../core/domain/Entily";

type StudentProps = {
  // Nome do aluno
  name: string;
  // Email do aluno
  email: string;
};

export class Student extends Entity<StudentProps> {
  private constructor(props: StudentProps, id?: string) {
    super(props, id);
  }
  //   Vai ser chamado sem instanciar
  static create(props: StudentProps, id?: string) {
    const student = new Student(props);
    return student;
  }
}
