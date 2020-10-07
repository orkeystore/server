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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true, unique: true })
  code: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    nullable: false,
    name: 'access_code',
  })
  accessToken: string;

  @ManyToOne(() => Account, { nullable: false })
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Account;

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
