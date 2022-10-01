import { Address, transferCoins, generateEvent, Context, balanceOf, balance } from "@massalabs/massa-sc-std"

export function sendCoin(_args: string): void {

    //Define addresses
    const stack = Context.addressStack();
    const baseAccount = stack[0];
    const target = new Address();
    target._value = _args;

    //Define balances
    let coins : u64;
    let coins2 : u64;
    coins = balance();
    coins2 = balanceOf(target.toByteString());

    //Print informations about addresses
    generateEvent("Sender Address: " + baseAccount.toByteString() + "\n      Balance of sender address before operation: " + coins.toString());
    generateEvent("Reciever Address: " + target.toByteString() + "\n      Balance of reciever address before operation: " + coins2.toString());

    //Transfer coins
    transferCoins(target, 1); //"1" is amount

    //Print informations about addresses
    generateEvent("Sender Address: " + baseAccount.toByteString() + "\n      Balance of sender address after operation: " + coins.toString());
    generateEvent("Reciever Address: " + target.toByteString() + "\n      Balance of reciever address after operation: " + coins2.toString());  
      
}
