declare module "my-types"{
    export interface User{
        id: number;
        name: string;
        email: string;
        password: string;
        profilePic: string;
    }
    
    export interface Tag{
        id: number;
        name: string;
    }

    export interface Product{
        id: number;
        title: string;
        description: string;
        price: number ;
        stock: number ;
        image?: string; // Contiene la dirección de la imagen del producto.
        userId: number;
        user: User;
        tags: Tag[]; // Cambiado de tag a tags
    }
}