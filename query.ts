import {Predicate} from "./predicate";
import {Order} from "./order";

export class Query {
    filter: Predicate[]
    orders: Order[]
    relations: string[]
    page: number
    per_page: number
    uniq: string

    constructor() {
        this.filter = []
        this.orders = []
        this.relations = []
    }
}



