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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false, unique: true })
  code: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => Account, (account) => account.entries, { nullable: false })
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Account;

  @Column({ name: 'account_id' })
  @RelationId('account')
  accountId: number;

  @OneToMany(() => RSAKey, (key) => key.entry)
  rsakeys?: RSAKey[];

  @Column({
    nullable: false,
    default: false,
    select: false,
    name: 'is_system',
  })
  isSystem: boolean;

  @Column({
    nullable: true,
    default: null,
    name: 'archived_at',
  })
  archivedAt: number;

  @Column({
    nullable: false,
    name: 'access_code',
  })
  accessCode: string;

  @Column({
    nullable: true,
    default: null,
    name: 'rotate_interval',
  })
  rotateInterval: number;
}
