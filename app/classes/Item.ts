import { IItem } from "../interfaces/Item";

export class Item implements IItem{
    description = '';
    value = 0;
    getDescription(): string {
        return this.description
    }
    getValue(): number {
        return this.value
    }
    setDescritpion(description: string): void {
        this.description = description
    }
    setValue(value: number): void {
        this.value = value
    }

}