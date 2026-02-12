interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButtom: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

class VideoPlayer implements VideoPlayerProtocol{

  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButtom: HTMLButtonElement;

  constructor(
    videoPlayer: HTMLVideoElement,
    playButton: HTMLButtonElement,
    stopButtom: HTMLButtonElement)
    {
    this.videoPlayer = videoPlayer;
    this.playButton = playButton;
    this.stopButtom = stopButtom;
    }


  playToggle(): void {
    if(this.videoPlayer.paused){
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    }
    else{
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }

  iniciarEventos(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButtom.addEventListener('click', () => {
      this.stop();
    })

  }

}

const videoPlayer = new VideoPlayer(
  document.querySelector('.video') as HTMLVideoElement,
  document.querySelector('.play') as HTMLButtonElement,
  document.querySelector('.stop') as HTMLButtonElement,
);

videoPlayer.iniciarEventos();
