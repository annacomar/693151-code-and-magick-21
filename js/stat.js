'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;


var CLOUD_X = 100;
var CLOUD_Y = 10;
/*var GAP = 10;
var FONT_GAP = 15;
var HIST_HEIGHT = 150;
var BAR_HEIGHT = HIST_HEIGHT - TEXT_HEIGHT - FONT_GAP - TEXT_HEIGHT - FONT_GAP;
var BAR_WIDTH = 40;
var BAR_DISTANCE = 50;*/

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText(`Ура вы победили!`, 130, 40);
  ctx.fillText(`Список результатов:`, 130, 60);

  ctx.fillText('2725', 145, 105);
  ctx.fillText('Вы', 145, 255);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(145, 130, 40, 100);


  ctx.fillStyle = '#000';
  ctx.fillText('4025', 235, 75);
  ctx.fillText('Кекс', 235, 255);
  ctx.fillStyle = '#0000FF';
  //ctx.fillStyle = `hsl(240, ` + randomColor + `%, 50%)`;
  ctx.fillRect(235, 100, 40, 130);


  ctx.fillStyle = '#000';
  ctx.fillText('1244', 325, 165);
  ctx.fillText('Катя', 325, 255);
  //ctx.fillStyle = `hsl(240, ` + randomColor + `%, 50%)`;
  ctx.fillRect(325, 190, 40, 40);


  ctx.fillStyle = '#000';
  ctx.fillText('1339', 415, 165);
  ctx.fillText('Игорь', 415, 255);
  //ctx.fillStyle = `hsl(240, ` + randomColor + `%, 50%)`;
  ctx.fillRect(415, 180, 40, 50);
};
