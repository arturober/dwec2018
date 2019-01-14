import { Injectable, EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private socket;
  private connected = false;
  private connecting = false;
  public connection$: EventEmitter<boolean> = new EventEmitter<boolean>();
  public messages$: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() {}

  connect(port: number) {
    if (!this.connected && !this.connecting) {
      this.connecting = true;
      this.socket = io(`http://localhost:${port}`);
      this.socket.on('connect', () => {
        this.connected = true;
        this.connecting = false;
        this.connection$.emit(true);
      });
      this.socket.on('disconnect', () => {
        this.connected = false;
        this.connection$.emit(false);
      });
      this.socket.on('message', msg => {
        this.messages$.emit(msg);
      });
    } else if (this.connected) {
      this.connection$.emit(true); // Already connected
    }
  }

  sendMessage(msg: Message) {
    if (this.connected) {
      this.socket.emit('new-message', msg);
    }
  }

  disconnect() {
    if (this.connected) {
      this.socket.close();
    }
  }
}
