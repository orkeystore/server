import { Exclude, Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  RelationId,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Account } from './Account';
import { RSAKey } from './RSAKey';

/**
 * Contain Key ORM entity.
 *
 * @category Entities
 */
@Entity('entries')
export class Entry {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ type: 'text', nullable: false })
  name: string;

  @IsString()
  @Column({ type: 'text', nullable: false, unique: true })
  code: string;

  @IsString()
  @IsOptional()
  @Column({ type: 'text', nullable: true })
  description?: string;

  @Type(() => Account)
  @ValidateNested()
  @IsOptional()
  @ManyToOne(() => Account, (account) => account.entries, { nullable: false })
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Account;

  @IsNumber()
  @Column({ name: 'account_id' })
  @RelationId('account')
  accountId: number;

  @Exclude()
  @OneToMany(() => RSAKey, (key) => key.entry)
  rsakeys?: RSAKey[];

  @Exclude()
  @Column({
    nullable: false,
    default: false,
    select: false,
    name: 'is_system',
  })
  isSystem: boolean;

  @IsNumber()
  @IsOptional()
  @Column({
    nullable: true,
    default: null,
    name: 'archived_at',
  })
  archivedAt: number;

  @IsString()
  @Column({
    nullable: false,
    name: 'access_code',
  })
  accessCode: string;

  @IsNumber()
  @IsOptional()
  @Column({
    nullable: true,
    default: null,
    name: 'rotate_interval',
  })
  rotateInterval: number;
}
