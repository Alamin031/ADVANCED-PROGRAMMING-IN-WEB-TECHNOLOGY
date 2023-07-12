import { CustomerEntity, ProductReview } from "src/customer/customer.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";



@Entity()
export class Order {
@PrimaryGeneratedColumn()
id: number;

@Column( { name: 'order_date', type: 'varchar', length: 255 } )
orderDate: string;

@Column( { name: 'order_status', type: 'varchar', length: 255 } )
orderStatus: string;

@Column( { name: 'products', type: 'varchar', length: 255 } )
products: string;
@Column()
totalAmount: number;

@Column( { name: 'shipping_address', type: 'varchar', length: 255 } )
shippingAddress: string;


  @OneToMany(() => ProductReview , (ProductReview) => ProductReview.order)
  ProductReview: ProductReview[];
  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  customer: CustomerEntity;
}