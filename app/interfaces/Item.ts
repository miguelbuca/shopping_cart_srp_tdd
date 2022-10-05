export interface IItemInput {
  /** Item description */
  description: string;
  /** Item Value  */
  value: number;
}

export interface IItem extends IItemInput{
  /** Get the item description */
  getDescription(): string;
  /** Gets de item velue */
  getValue(): number;

  /**
   * Set a new value to description prop
   * @param description
   */
  setDescritpion(description: string): void;

  /**
   * Set a new value to value prop
   * @param value 
   */
  setValue?(value: number): void
}