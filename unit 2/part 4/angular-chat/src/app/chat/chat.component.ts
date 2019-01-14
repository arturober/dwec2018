import { Component, OnInit, Input } from '@angular/core';
import { SocketIoService } from '../services/socket-io.service';
import { filter } from 'rxjs/operators';
import { Message } from '../interfaces/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() user: string;
  messages: Message[] = [];
  newMsg = '';
  connected = false;

  constructor(private ioService: SocketIoService) {}

  ngOnInit() {
    this.ioService.connection$.subscribe(
      connected => (this.connected = connected)
    );

    this.ioService.messages$.pipe(
        filter(m => m.user !== this.user)
      ) // Only messages not mine
      .subscribe(m => {
        m.mine = false;
        this.messages.push(m);
      });
  }

  connect() {
    this.ioService.connect(5000);
  }

  disconnect() {
    this.ioService.disconnect();
  }

  send() {
    const msg: Message = { user: this.user, text: this.newMsg };
    this.ioService.sendMessage(msg);
    msg.mine = true;
    this.messages.push(msg); // Add the message directly to the chat
    this.newMsg = '';
  }
}
