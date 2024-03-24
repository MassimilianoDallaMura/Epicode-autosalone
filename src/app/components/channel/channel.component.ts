import { Component } from '@angular/core';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent {
  openYouTubeChannel() {
    window.open("https://www.youtube.com/channel/UCXBSVyTdpiFGYK7cS0qDAcw", "_blank");
  }
}
