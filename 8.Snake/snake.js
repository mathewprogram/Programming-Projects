// Constants
const CANVAS_SIZE = 400;
const GRID_SIZE = 20;
const INITIAL_SPEED = 200; // in milliseconds

// Variables
let canvas, ctx;
let snake, food;
let direction;
let gameLoop;
let isGameRunning;
let lastUpdate = 0;
const delay = INITIAL_SPEED; // in milliseconds

// Initialization function
function init() {
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  // Event listener for arrow keys to change the direction of the snake
  document.addEventListener('keydown', handleKeyDown);

  reset();
}

// Reset the game
function reset() {
  snake = [
    { x: 160, y: 200 },
    { x: 140, y: 200 },
    { x: 120, y: 200 },
  ];
  direction = 'right';
  gameLoop = null;
  isGameRunning = false;

  createFood();

  lastUpdate = performance.now();

  if (gameLoop) {
    cancelAnimationFrame(gameLoop);
  }

  gameLoop = requestAnimationFrame(update);
}

// Create a food at a random position
function createFood() {
  food = {
    x: Math.floor(Math.random() * GRID_SIZE) * GRID_SIZE,
    y: Math.floor(Math.random() * GRID_SIZE) * GRID_SIZE,
  };

  // Check if the food is overlapping with the snake's body
  for (let i = 0; i < snake.length; i++) {
    if (food.x === snake[i].x && food.y === snake[i].y) {
      createFood();
      break;
    }
  }
}

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  // Draw the snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? 'green' : 'white';
    ctx.fillRect(snake[i].x, snake[i].y, GRID_SIZE, GRID_SIZE);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(snake[i].x, snake[i].y, GRID_SIZE, GRID_SIZE);
  }

  // Draw the food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, GRID_SIZE, GRID_SIZE);

  ctx.strokeStyle = 'black';
  ctx.strokeRect(food.x, food.y, GRID_SIZE, GRID_SIZE);
}

function update(timestamp) {
  const elapsed = timestamp - lastUpdate;

  if (elapsed >= delay) {
    const head = { x: snake[0].x, y: snake[0].y };

    // Update the snake's head based on the current direction
    switch (direction) {
      case 'up':
        head.y -= GRID_SIZE;
        break;
      case 'down':
        head.y += GRID_SIZE;
        break;
      case 'left':
        head.x -= GRID_SIZE;
        break;
      case 'right':
        head.x += GRID_SIZE;
        break;
    }

    // Check for collision with the food
    if (head.x === food.x && head.y === food.y) {
      snake.unshift(head); // Add new head to the snake array
      createFood();
    } else {
      snake.pop(); // Remove the last tail cell
    }

    // Check for collision with the walls or self
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= CANVAS_SIZE ||
      head.y >= CANVAS_SIZE ||
      isCollision(head)
    ) {
      cancelAnimationFrame(gameLoop);
      isGameRunning = false;
      if (confirm('Game over! Play again?')) {
        reset();
      }
      return;
    }

    snake.unshift(head);

    draw();

    lastUpdate = timestamp;
  }

  gameLoop = requestAnimationFrame(update);
}

function isCollision(head) {
  // Check for collision with the snake's body
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function handleKeyDown(e) {
  // Prevent default behavior of arrow keys scrolling the page
  if (e.key.startsWith('Arrow')) {
    e.preventDefault();
  }

  // Change the direction based on the arrow key pressed
  switch (e.key) {
    case 'ArrowUp':
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 'ArrowDown':
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
    case 'ArrowLeft':
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 'ArrowRight':
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
  }
}

// Start the game
init();