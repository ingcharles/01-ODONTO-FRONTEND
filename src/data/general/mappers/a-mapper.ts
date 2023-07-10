export abstract class AMapper<I, O> {

    abstract mapPersonaByCiFrom(param: I | I[]): O | O[];
}
