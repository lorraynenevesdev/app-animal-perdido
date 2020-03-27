

    export interface AnimalPerdido {
        idanimal_perdido: number;
        especie: string;
        caracteristicas_fisicas: string;
        foto: string;
        quando: string;
        onde: string;
    }

    export interface ResponseAnimalPerdido {
        status: boolean;
        data: AnimalPerdido[];
    }

    export interface RequestAnimalPerdidoCreate {
        especie: string;
        caracteristicas_fisicas: string;
        foto: string;
        quando: Date;
        onde: string;
    }
    
    
    export interface ResponseAnimalPerdidoCreate {
        status: boolean;
        data: AnimalPerdido;
    }
    
    //update da lista de animais perdidos
    export interface ResponseAnimalPerdidoUpdate {
         status: boolean;
        data: AnimalPerdido;
    }

    export interface RequestAnimalPerdidoGetUpdate {
        status: boolean;
       data: AnimalPerdido;
   }
    
    export interface RequestAnimalPerdidoUpdate {
        idanimal_perdido: number;
        especie: string;
        caracteristicas_fisicas: string;
        foto: string;
        quando: string;
        onde: string;
    }