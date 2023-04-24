import { Entity } from "../../core/domain/Entily";

type CorrectionProps = {
  // Nota de 0 a 10
  grade: number;
  // Id do aluno
  submissionId: string;
  // Quando foi corrigido
  createdAt: Date;
};

export class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps, id?: string) {
    super(props, id);
  }
  static create(props: CorrectionProps, id?: string) {
    const correction = new Correction(props);
    return correction;
  }
}
