import { VerificationLevel } from './verification-level';
import { VerificationRule } from './verification-rule';

export class CheckForHighestLevel {
  constructor(private readonly rules: VerificationRule[]) {}

  checkForHighestLevel() {
    const checkResults = this.rules.map((rule) => rule.check());
    const [highestResult] = VerificationLevel.sortLevels(
      checkResults.map((checkResult) => checkResult.getLevel()),
    );
    return highestResult;
  }
}
