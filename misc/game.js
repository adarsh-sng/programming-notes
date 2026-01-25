const readline = require('readline');

// --- CONFIGURATION ---
const WIDTH = process.stdout.columns;
const HEIGHT = process.stdout.rows;
const WALL_CHAR = '#';
const PLAYER_CHAR = 'O';
const COIN_CHAR = '$';

// --- GAME STATE ---
let player = { x: 5, y: 5 };
let score = 0;
let message = "Collect the dollars!";
let coin = { x: 10, y: 10 };

// --- ENGINE LOGIC ---

// 1. Setup Input (Raw Mode)
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'q') process.exit(); // Quit
  
  // Movement Logic
  if (key.name === 'w' && player.y > 2) player.y--;
  if (key.name === 's' && player.y < HEIGHT - 2) player.y++;
  if (key.name === 'a' && player.x > 1) player.x--;
  if (key.name === 'd' && player.x < WIDTH - 2) player.x++;

  // Coin Logic
  if (player.x === coin.x && player.y === coin.y) {
    score += 10;
    message = "Rich!!";
    // Respawn coin randomly
    coin.x = Math.floor(Math.random() * (WIDTH - 4)) + 2;
    coin.y = Math.floor(Math.random() * (HEIGHT - 4)) + 2;
  }
});

// 2. The Buffer System (Drawing Tool)
function createBuffer(w, h) {
  let buffer = [];
  for (let y = 0; y < h; y++) {
    buffer[y] = new Array(w).fill(' '); // Fill with empty space
  }
  return buffer;
}

function writeToBuffer(buffer, x, y, text) {
  // Prevent crashing if writing outside the screen
  if (y < 0 || y >= buffer.length) return;
  
  for (let i = 0; i < text.length; i++) {
    if (x + i < buffer[y].length) {
      buffer[y][x + i] = text[i];
    }
  }
}

// 3. The Render Loop
function render() {
  // A. Create a blank screen
  const screen = createBuffer(WIDTH, HEIGHT);

  // B. Draw Borders (Box Drawing)
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      if (y === 0 || y === HEIGHT - 1) screen[y][x] = '═';
      else if (x === 0 || x === WIDTH - 1) screen[y][x] = '║';
      
      // Corners
      if (x===0 && y===0) screen[y][x] = '╔';
      if (x===WIDTH-1 && y===0) screen[y][x] = '╗';
      if (x===0 && y===HEIGHT-1) screen[y][x] = '╚';
      if (x===WIDTH-1 && y===HEIGHT-1) screen[y][x] = '╝';
    }
  }

  // C. Draw UI Text
  // Note: We write over the border lines we just drew
  writeToBuffer(screen, 2, 0, `[ MY COOL GAME ]`);
  writeToBuffer(screen, 2, HEIGHT - 1, `[ Score: ${score} ]`);
  writeToBuffer(screen, 20, HEIGHT - 1, `[ Msg: ${message} ]`);

  // D. Draw Objects
  writeToBuffer(screen, coin.x, coin.y, `\x1b[33m${COIN_CHAR}\x1b[0m`); // Yellow Coin
  writeToBuffer(screen, player.x, player.y, `\x1b[36m${PLAYER_CHAR}\x1b[0m`); // Cyan Player

  // E. Convert to String and Print
  // We join rows with \n
  const output = screen.map(row => row.join('')).join('\n');
  
  // Move cursor to top-left (0,0) and print
  // \x1b[?25l hides the cursor so it doesn't flicker
  process.stdout.write('\x1b[?25l\x1b[H' + output);
}

// Start Game Loop
console.clear();
setInterval(render, 16); // 60 FPS