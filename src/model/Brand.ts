import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {Product} from './index'
@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  BrandID: number;

  @Column()
  BrandName: string;

  @Column({ nullable: false })
  isActive: boolean | null

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];
}
