import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: Number = 10;
  serverStatus: String = 'offline';

  constructor() {}

  ngOnInit() {}

  getServerStatus() {
    return this.serverStatus;
  }
}
