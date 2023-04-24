import { Entity } from "../../core/domain/Entily";

type SubmissionProps = {
  // Para um desafio específico
  challengeId: string;
  // Por um aluno específico
  studentId: string;
  //   Por um horário específico
  createdAt?: Date;
};

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }
  //   Vai ser chamado sem instanciar
  static create(props: SubmissionProps, id?: string) {
    const submission = new Submission({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    });
    return submission;
  }
}
