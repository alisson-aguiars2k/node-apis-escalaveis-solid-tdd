import { InMemorychallengessRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";
import { Student } from "../../domain/entitles/student";
import { Challenge } from "../../domain/entitles/challenge";

describe("Create challenge submission use case", () => {
  it("should be able to create a new challege submission", async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemorychallengessRepository();

    const student = Student.create({
      name: "Alisson Aguiar",
      email: "alisson-aguiars2k@outlook.com",
    });

    const challenge = Challenge.create({
      title: "Alisson Aguiar",
      instructionsUrl: "http://example.com",
    });

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);

    // sut = sistem teste
    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
