import { serviceModel, Servico } from "../servicos/model";

export abstract class Adicional implements serviceModel {

    constructor( protected Servico: serviceModel) {}

    getDescricao(): string {
        return this.Servico.getDescricao()
    }
    getPreco(): number {
        return this.Servico.getPreco()
    }
}