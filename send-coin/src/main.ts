import { createSC, fileToBase64, call, generateEvent } from "@massalabs/massa-sc-std";

export function main(_args: string): void {

    //Create smart contract
    const bytes = fileToBase64('./build/smart-contract.wasm');
    let scAddress = createSC(bytes);

    //Call smart contract
    _args = "A18eMYGi7jRFQ1WW9WejQ7JFC4fGdHUnFioCoyR5ZnV5w3G2sBZ"; // Wallet address to send coins
    generateEvent(call(scAddress, "sendCoin", _args, 0));

}
