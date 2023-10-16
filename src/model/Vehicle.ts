import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Receipt } from './Receipt';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  VehicleID: number;

  @Column({ nullable: true })
  NumberPlate: string;

  @Column({ nullable: true })
  Type: string;

  @Column({ nullable: true })
  Color: string;

  @Column({ nullable: true })
  EngineNumber: string;

  @Column({ nullable: true })
  ChassisNumber: string;

  @Column({ nullable: true })
  Brand: string;

  @OneToMany(() => Receipt, (receipt) => receipt.vehicle)
  receipts: Receipt[];
}
