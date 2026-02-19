import { MessagingProtocol } from "../classes/interfaces/messasing-protocol";

export class Messaging implements MessagingProtocol{
  sendMessage(msg: string): void {
    console.log(msg);
  }
}
