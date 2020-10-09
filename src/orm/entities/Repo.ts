import { IsNumber, IsOptional, IsString } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  RelationId,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Account } from './Account';
import { Entry } from './Entry';

/**
 * Contain Repo ORM entity.
 *
 * @category Repo
 */
@Entity('repos')
export class Repo {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ type: 'text', nullable: false })
  name: string;

  @IsString()
  @IsOptional()
  @Column({ type: 'text', nullable: true, unique: true })
  code: string;

  @IsOptional()
  @IsString()
  @Column({ type: 'text', nullable: true })
  description: string;

  @IsString()
  @Column({
    nullable: false,
    name: 'access_code',
  })
  accessToken: string;

  @ManyToOne(() => Account, { nullable: false })
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Account;

  @IsNumber()
  @Column({ name: 'account_id' })
  @RelationId('account')
  accountId: number;

  @ManyToMany(() => Entry, { cascade: true })
  @JoinTable({
    name: 'repos_x_entries',
    joinColumn: { name: 'repo_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'entry_id', referencedColumnName: 'id' },
  })
  entries: Entry[];
}
