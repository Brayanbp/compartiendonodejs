var health= require('./health.js')(100);

console.log('Vida actual: ', health.life);
console.log('Fuiste atacado, tus vidas disminuyeron a: ' + health.getHit(1));