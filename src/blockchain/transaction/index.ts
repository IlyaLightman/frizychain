import TransactionInput from "./input";
import TransactionOutput from "./output";

export default class Transaction {
    inputs: TransactionInput[]
    outputs: TransactionOutput[]
    hash: string

    constructor(inputs: TransactionInput[], outputs: TransactionOutput[]) {
        this.inputs = inputs
        this.outputs = outputs
        this.hash = inputs.reduce((hash, input) => hash + input.hash, '') +
            outputs.reduce((hash, input) => hash + input.hash, '')
    }
}
