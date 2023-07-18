export abstract class AMapper<I, O> {

    abstract mapLoginFrom(param: I | I[]): O | O[];
}
