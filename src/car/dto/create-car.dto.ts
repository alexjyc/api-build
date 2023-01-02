import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateCarDTO {
    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;

    @IsNumber()
    readonly price: number;

    @IsOptional()
    @IsString({ each: true})
    readonly color: string[];
}