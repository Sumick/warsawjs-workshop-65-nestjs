export enum VerificationLevelValue {
  LEVEL_NONE = 'LEVEL_NONE',
  LEVEL_1 = 'LEVEL_1',
  LEVEL_2 = 'LEVEL_2',
  LEVEL_3 = 'LEVEL_3',
}

export class VerificationLevel {
  private static order = {
    [VerificationLevelValue.LEVEL_NONE]: 0,
    [VerificationLevelValue.LEVEL_1]: 1,
    [VerificationLevelValue.LEVEL_2]: 2,
    [VerificationLevelValue.LEVEL_3]: 3,
  };

  constructor(private readonly level: VerificationLevelValue) {}

  getLevel() {
    return this.level;
  }

  static sortLevels(
    levels: VerificationLevelValue[],
  ): VerificationLevelValue[] {
    return levels.sort(
      (a, b) => VerificationLevel.order[b] - VerificationLevel.order[a],
    );
  }
}
