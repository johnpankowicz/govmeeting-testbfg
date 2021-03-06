import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Message } from './message';

const NoLog = true; // set to false for console logging

@Injectable()
export class ChatService {
  private ClassName: string = this.constructor.name + ': ';
  messageReceived = new EventEmitter<Message>();
  connectionEstablished = new EventEmitter<boolean>();

  private connectionIsEstablished = false;
  private _hubConnection: HubConnection | undefined;

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    // this.startConnection();
  }

  sendMessage(message: Message) {
    if (this._hubConnection !== undefined) {
      this._hubConnection.invoke('NewMessage', message);
    }
  }

  private createConnection() {
    this._hubConnection = new HubConnectionBuilder().withUrl(window.location.href + 'MessageHub').build();
  }

  private startConnection(): void {
    if (this._hubConnection === undefined) {
      return;
    }
    this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        NoLog || console.log(this.ClassName + 'Hub connection started');
        this.connectionEstablished.emit(true);
      })
      .catch((err) => {
        NoLog || console.log(this.ClassName + 'Error while establishing connection, retrying...');
        // setTimeout(function () { this.startConnection(); }, 5000);
      });
  }

  private registerOnServerEvents(): void {
    if (this._hubConnection === undefined) {
      return;
    }
    this._hubConnection.on('MessageReceived', (data: any) => {
      this.messageReceived.emit(data);
    });
  }
}
