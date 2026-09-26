'use strict';
function externalHello(){document.getElementById('hello').textContent='Привет! (из lesson3.js)'}
function showName(){const name=prompt('Ваше имя?');if(name===null)return;document.getElementById('name-result').textContent=`Привет, ${name.trim()||'гость'}!`}
function inputNumber(label){const raw=prompt(label);if(raw===null)return null;if(!raw.trim()||!Number.isFinite(Number(raw))){alert('Введите число');return null}return Number(raw)}
function sumPrompt(){const a=inputNumber('Первое число');if(a===null)return;const b=inputNumber('Второе число');if(b===null)return;document.getElementById('sum-result').textContent=`${a} + ${b} = ${a+b}`}
function pyramid(n){const root=document.getElementById('pyramid');root.replaceChildren();for(let i=1;i<=n;i++){let bar=document.createElement('span');bar.style.width=`${i*10}%`;root.append(bar)}}
function multiplyTable(n,id){document.getElementById(id).textContent=Array.from({length:10},(_,i)=>`${n} × ${i+1} = ${n*(i+1)}`).join('\n')}
function numbers(){const root=document.getElementById('numbers');root.replaceChildren();const table=document.createElement('table');for(let i=1;i<=100;i++){const row=table.insertRow(),cell=row.insertCell();cell.textContent=i}root.append(table)}
function customTable(){let n=inputNumber('На какое число умножать?');if(n!==null)multiplyTable(n,'custom')}
function multiply(a,b){return a*b}
function functionExample(){let a=inputNumber('Первое число');if(a===null)return;let b=inputNumber('Второе число');if(b===null)return;document.getElementById('multiply-result').textContent=`Результат функции: ${multiply(a,b)}`}
let left,right,correct=0,total=0;function newQuestion(){left=Math.floor(Math.random()*20)+1;right=Math.floor(Math.random()*20)+1;document.getElementById('question').textContent=`${left} + ${right} = ?`;document.getElementById('answer').value='';document.getElementById('feedback').textContent=''}
function checkAnswer(){if(left===undefined){newQuestion();return}const value=document.getElementById('answer').value;if(value===''){document.getElementById('feedback').textContent='Введите ответ';return}total++;if(Number(value)===left+right){correct++;document.getElementById('feedback').textContent='Верно! Оценка: 5'}else document.getElementById('feedback').textContent=`Ошибка. Верный ответ: ${left+right}. Оценка: 2`;document.getElementById('score').textContent=`Правильно: ${correct} / ${total}`;left=undefined}
