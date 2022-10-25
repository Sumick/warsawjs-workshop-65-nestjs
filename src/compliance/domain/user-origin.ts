import {
  VerificationLevel,
  VerificationLevelValue,
} from './verification-level';

export class UserOrigin {
  constructor(
    private userCountryCode: string,
    private readonly highRiskCountries: string[] = [],
  ) {}

  check(): VerificationLevel {
    if (this.userCountryCode === 'PHL') {
      return new VerificationLevel(VerificationLevelValue.LEVEL_3);
    }

    if (this.highRiskCountries.includes(this.userCountryCode)) {
      return new VerificationLevel(VerificationLevelValue.LEVEL_2);
    }

    return new VerificationLevel(VerificationLevelValue.LEVEL_NONE);
  }
}
