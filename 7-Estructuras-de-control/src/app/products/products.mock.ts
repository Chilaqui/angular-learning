export const productsList: Products[] = [
    {id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1L de lavandina'},
    {id: 2, name: 'Detergente', price: 5, description: 'Dura 120 lavados'},
    {id: 3, name: 'Limpia Vidrios', price: 7, description: ' Tus vidrios brillarán como nuevos'},
    {id: 4, name: 'Quita Grasa', price: 8 , description: 'Cocina limpia y sin grasa'},
    {id: 5, name: 'Perfumina', price: 2, description: 'Olor a campo fresco todo el día'},
];

export interface Products{
    id: number | string;
    name: string;
    price: number;
    description: string;
};