import { IsString, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  sku: string;

  @IsNumber()
  stock: number;

  @IsArray()
  images: string[];

  @IsArray()
  sizes: string[];

  @IsArray()
  colors: string[];
}
