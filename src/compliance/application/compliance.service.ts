import { Injectable } from '@nestjs/common';
import { UsersService } from '../../user/application/users.service';
import { CheckForHighestLevel } from '../domain/check-for-highest-level';
import { TransactionsCount } from '../domain/transactions-count';
import { TransactionsVolume } from '../domain/transactions-volume';
import { UserOrigin } from '../domain/user-origin';

interface UserTransactionsData {
  transactionsVolumeGross: number;
  totalTransactionsAmount: number;
  countryOfOrigin: string;
}

abstract class UserTransactionsRepository {
  abstract getUserData(userId: string): UserTransactionsData;
}

@Injectable()
export class ComplianceService {
  constructor(private readonly repo: UserTransactionsRepository) {}

  async checkUserLevel(userId: string) {
    const transactionsData = await this.repo.getUserData(userId);

    const userLevel = new CheckForHighestLevel([
      new TransactionsCount(transactionsData.totalTransactionsAmount),
      new TransactionsVolume(transactionsData.transactionsVolumeGross),
      new UserOrigin(transactionsData.countryOfOrigin),
    ]).checkForHighestLevel();

    console.log('userLevel', userLevel);

    return userLevel;
  }
}
