import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  RelationId,
} from 'typeorm';
import { Entry } from './Entry';

/**
 * Contain Key ORM entity.
 *
 * @category Entities
 */
@Entity('rsakeys')
export class RSAKey {
  @PrimaryGeneratedColumn()
  kid: number;

  @Column({ type: 'text' })
  kty: string;

  @Column({ type: 'text' })
  alg: string;

  @Column({ type: 'text' })
  e: string;

  @Column({ type: 'text' })
  n: string;

  @Column({ type: 'text' })
  d: string;

  @Column({ type: 'text' })
  p: string;

  @Column({ type: 'text' })
  q: string;

  @Column({ type: 'text' })
  dp: string;

  @Column({ type: 'text' })
  dq: string;

  @Column({ type: 'text' })
  qi: string;

  @Column({ type: 'integer', nullable: true, name: 'expires_at' })
  expiresAt: number | null;

  @Column({ type: 'integer', nullable: false, name: 'activates_at' })
  activatesAt: number;

  @ManyToOne(() => Entry, (entry) => entry.rsakeys, { nullable: false })
  @JoinColumn({ name: 'entry_id', referencedColumnName: 'id' })
  entry: Entry;

  @RelationId((key: RSAKey) => key.entry)
  entryId: number;
}
