var Health = function(initialHealth){

    this.life= initialHealth;

    this.getHit = function(amount) {
    	this.life -= amount;
    	return this.life;
    }

    return this;
}

module.exports = Health;