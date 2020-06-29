export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 0;
    this.scratches = 0;
    this.feedings = 0;
    this.hungerInterval;
    this.moodInterval;
  }

  setHunger() {
    this.hungerInterval = setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setMood() {
    this.moodInterval = setInterval(() => {
      this.moodLevel++;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    if (this.foodLevel > 0){
      this.feedings ++;
      this.foodLevel = 10;
    }
  }

  isBearAttacking() {
    if (this.moodLevel < 10) {
      return false;
    } else {
      return true;
    }
  }

  scratchBack() {
    if (this.moodLevel < 10) {
      this.scratches ++;
      this.moodLevel = 0;
    } if (this.scratches === 10 && this.feedings === 10){
      this.hibernate();
    }
  }

  hibernate() {
    clearInterval(this.hungerInterval);
    clearInterval(this.moodInterval);
      this.foodLevel = 10;
      this.moodLevel = 0;
      setTimeout(() => {
        this.setHunger();
        this.setMood();
      }, 20000)
  } 
}