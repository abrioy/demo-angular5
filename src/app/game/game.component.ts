import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  @ViewChild('canvas') canvasRef: ElementRef;
  private running: boolean = false;
  private gameState: GameState = new GameState();
  private leftPressed: boolean = false;
  private rightPressed: boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.running = true;
    this.paint();
  }

  ngOnDestroy() {
    this.running = false;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 37:
        this.leftPressed = true;
        break;
      case 39:
        this.rightPressed = true;
        break;
      case 32:
        this.gameState.start();
        break;
      default:
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 37:
        this.leftPressed = false;
        break;
      case 39:
        this.rightPressed = false;
        break;
      default:
    }
  }

  private paint() {
    if (!this.running) {
      return;
    }

    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');

    this.gameState.tick(this.leftPressed, this.rightPressed);
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, 720, 480);

    this.gameState.draw(ctx);

    requestAnimationFrame(() => this.paint());
  }

}

export class GameState {
  private started: boolean = false;

  private canvasWidth = 720;
  private canvasHeight = 480;
  private playerSizeX = 40;
  private playerSizeY = 10;
  private playerPos = new Position(
    this.canvasWidth / 2 - this.playerSizeX / 2,
    this.canvasHeight - this.playerSizeY - 20
  );

  private ballSize = 4;
  private ballPos = new Position(
    this.playerPos.x + this.playerSizeX / 2,
    this.playerPos.y - this.ballSize
  );
  private ballPosLast = new Position(
    this.ballPos.x,
    this.ballPos.y
  );
  private launchBall: boolean = false;

  public tick(leftPressed: boolean, rightPressed: boolean) {
    let move: number = 0;
    if (leftPressed) {
      move = -5;
    }
    if (rightPressed) {
      move = +5;
    }
    if (this.playerPos.x + move < 0 || this.playerPos.x + move > this.canvasWidth - this.playerSizeX) {
      move = 0;
    }
    this.playerPos.x += move;

    if (this.launchBall) {
      this.launchBall = false;
      this.ballPosLast.y += 5;
    }

    let ballPosNew = (this.started) ?
      this.getNextBallPos(this.ballPosLast, this.ballPos) :
      new Position(this.ballPos.x + move, this.ballPos.y);
    //console.log("BALL ", this.ballPosLast, " => ", this.ballPos, " => ", ballPosNew);
    this.ballPosLast = this.ballPos;
    this.ballPos = ballPosNew;
  }

  public start() {
    if (!this.started) {
      this.launchBall = true;
      this.started = true;
    }
    else {
      this.started = false
      this.ballPos = new Position(
        this.playerPos.x + this.playerSizeX / 2,
        this.playerPos.y - this.ballSize
      );
    }
  }

  private getNextBallPos(lastPos: Position, currentPos: Position): Position {
    let diffX = currentPos.x - lastPos.x;
    let diffY = currentPos.y - lastPos.y;

    let newPos = new Position(
      currentPos.x + diffX,
      currentPos.y + diffY
    );


    let minPosX = (newPos.x - this.ballSize / 2);
    let minPosY = (newPos.y - this.ballSize / 2);
    let maxPosX = (newPos.x + this.ballSize / 2);

    if (minPosX < 0) {
      newPos.x = -minPosX
    }
    if (minPosY < 0) {
      newPos.y = -minPosY
    }
    if (maxPosX > this.canvasWidth) {
      newPos.x = this.canvasWidth - (maxPosX - this.canvasWidth);
    }

    if ((newPos.x + this.ballSize / 2) > this.playerPos.x &&
      (newPos.x - this.ballSize / 2) < (this.playerPos.x + this.playerSizeX)) {

      if ((newPos.y + this.ballSize / 2) > this.playerPos.y) {
        newPos.y = this.playerPos.y - ((newPos.y + this.ballSize / 2) - this.playerPos.y);
      }
    }

    return newPos;
  }


  public draw(ctx: CanvasRenderingContext2D) {
    this.drawPlayer(ctx);
    this.drawBall(ctx);
  }

  private drawPlayer(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = `rgb(0,0,0)`;
    ctx.fillRect(
      this.playerPos.x,
      this.playerPos.y,
      this.playerSizeX,
      this.playerSizeY);
  }

  private drawBall(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(
      this.ballPos.x,
      this.ballPos.y,
      this.ballSize,
      0, 2 * Math.PI, false);
    ctx.fillStyle = `rgb(0,0,0)`;
    ctx.fill();
  }
}


class Position {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
