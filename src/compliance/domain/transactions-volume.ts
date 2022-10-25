import {
  VerificationLevel,
  VerificationLevelValue,
} from './verification-level';

export class TransactionsVolume {
  constructor(private readonly volumeGross: number) {}
  check(): VerificationLevel {
    if (this.volumeGross < 500) {
      return new VerificationLevel(VerificationLevelValue.LEVEL_NONE);
    }

    if (this.volumeGross < 10_000) {
      return new VerificationLevel(VerificationLevelValue.LEVEL_1);
    }

    if (this.volumeGross < 50_000) {
      return new VerificationLevel(VerificationLevelValue.LEVEL_2);
    }

    return new VerificationLevel(VerificationLevelValue.LEVEL_3);
  }
}
