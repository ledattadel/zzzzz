import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
	JoinColumn,
} from 'typeorm';

import { Receipt } from './index';
import { RepairOrderDetail } from './index';
import { Role } from  './index';
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');


@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  idCardNumber: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  address: string | null;

  @Column({ type: 'timestamp', nullable: true })
  dob: Date | null;


  @Column({unique: true})
  username: string;

  @Column()
  password: string;

  // account - role
  @ManyToOne(() => Role, (role) => role.staff)
  role: Role;

  @Column({ nullable: false })
  isActive: boolean | null;

  @Column({ nullable: true })
  email: string | null;

  @Column({ nullable: true })
  phoneNumber: string | null;

  @Column('timestamp', { name: 'delete_at', nullable: true })
  deleteAt: Date | null;


  @OneToMany(() => Receipt, (receipt) => receipt.staff)
  receipts: Receipt[];

  @OneToMany(() => RepairOrderDetail, (rod) => rod.staff)
  repairOrderDetails: RepairOrderDetail[];


  
	comparePassword = (password: string) => {
		return bcrypt.compareSync(password, this.password)
	}

	createPassword = (password: string) => {
		return (this.password = bcrypt.hashSync(password, 10))
	}

	
}
