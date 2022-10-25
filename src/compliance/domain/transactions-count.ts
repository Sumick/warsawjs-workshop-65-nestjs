import { VerificationLevel, VerificationLevelValue } from './verification-level';


export class TransactionsCount {
  constructor(private readonly totalTransactions: number) {
  }
  check(): VerificationLevel {

    if (this.totalTransactions < 10) {
      return new VerificationLevel(VerificationLevelValue.LEVEL_NONE)
    }

    if (this.totalTransactions < 50) {
      return new VerificationLevel(VerificationLevelValue.LEVEL_1)
    }

    if (this.totalTransactions < 100) {
      return new VerificationLevel(VerificationLevelValue.LEVEL_2)
    }

    return new VerificationLevel(VerificationLevelValue.LEVEL_3)
  }
}