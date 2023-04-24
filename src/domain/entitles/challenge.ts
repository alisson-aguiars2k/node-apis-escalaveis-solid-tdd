import { Entity } from "../../core/domain/Entily";

type ChallengeProps = {
  // titulo
  title: string;
  // URL de instruções para realizar os desafios
  instructionsUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }
  static create(props: ChallengeProps, id?: string) {
    const challenge = new Challenge(props);
    return challenge;
  }
}
