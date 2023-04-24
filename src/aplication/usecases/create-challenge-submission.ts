import { Submission } from "../../domain/entitles/submission";
import { StudentsRepository } from "../repositories/StudentsRepository";
import { ChallengesRepository } from "../repositories/ChallengesRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
};

export class CreateChallengeSubmission {
  // instanciando
  constructor(
    private studentsRepository: StudentsRepository,
    private challengesRepository: ChallengesRepository
  ) {}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student = await this.studentsRepository.findById(studentId);

    if (!student) {
      throw new Error("Students does not exists.");
    }

    const challenge = await this.challengesRepository.findById(challengeId);

    if (!challenge) {
      throw new Error("Challenge does not exists.");
    }

    const submission = Submission.create({
      studentId,
      challengeId,
    });
    return submission;
  }
}
