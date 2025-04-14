export type PizzaSize = 'small' | 'medium' | 'large';

export interface Pizza{
    name:string;
    size:PizzaSize;
    toppings:string[];
    bake():void;
}