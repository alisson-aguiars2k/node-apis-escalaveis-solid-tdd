import { Challenge } from "../../domain/entitles/challenge";

export interface ChallengesRepository {
  findById(id: string): Promise<Challenge | null>;
}
