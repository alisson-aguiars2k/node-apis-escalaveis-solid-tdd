import { ChallengesRepository } from "../../src/aplication/repositories/ChallengesRepository";
import { Challenge } from "../../src/domain/entitles/challenge";

export class InMemorychallengessRepository implements ChallengesRepository {

  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find((challenge) => challenge.id === id);
    if (!challenge) {
      return null;
    }
    return challenge;
  }
}
