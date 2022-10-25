import { Module } from '@nestjs/common';
import { ComplianceService } from './application/compliance.service';

@Module({
  providers: [ComplianceService],
})
export class ComplianceModule {}
