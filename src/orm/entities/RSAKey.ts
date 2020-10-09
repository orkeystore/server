import { Exclude } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
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
  @IsNumber()
  @PrimaryGeneratedColumn()
  kid: number;

  @IsString()
  @Column({ type: 'text' })
  kty: string;

  @IsString()
  @Column({ type: 'text' })
  alg: string;

  @IsString()
  @Column({ type: 'text' })
  e: string;

  @IsString()
  @Column({ type: 'text' })
  n: string;

  @IsString()
  @Column({ type: 'text' })
  d: string;

  @IsString()
  @Column({ type: 'text' })
  p: string;

  @IsString()
  @Column({ type: 'text' })
  q: string;

  @IsString()
  @Column({ type: 'text' })
  dp: string;

  @IsString()
  @Column({ type: 'text' })
  dq: string;

  @IsString()
  @Column({ type: 'text' })
  qi: string;

  @IsNumber()
  @Column({ type: 'integer', nullable: true, name: 'expires_at' })
  expiresAt: number | null;

  @IsNumber()
  @Column({ type: 'integer', nullable: false, name: 'activates_at' })
  activatesAt: number;

  @Exclude()
  @ManyToOne(() => Entry, (entry) => entry.rsakeys, { nullable: false })
  @JoinColumn({ name: 'entry_id', referencedColumnName: 'id' })
  entry: Entry;

  @IsNumber()
  @RelationId((key: RSAKey) => key.entry)
  entryId: number;
}
