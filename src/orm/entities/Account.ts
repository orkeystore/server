import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Entry } from './Entry';

/**
 * Contain Key ORM entity.
 *
 * @category Entities
 */
@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  login: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  password: string;

  @Column({ nullable: false, default: false, name: 'is_admin' })
  isAdmin: boolean;

  @OneToMany(() => Entry, (entry) => entry.account)
  entries: Entry[];
}
