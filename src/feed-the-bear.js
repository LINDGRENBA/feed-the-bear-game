export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 0;
    this.scratches = 0;
    this.feedings = 0;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setMood() {
    setInterval(() => {
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
    }
  }

  // hibernate() {
  //   setTimeout(() => {
  //     this.foodLevel = 10;
  //     this.moodLevel = 0;
  //   }, 20000);
  // }

  executeHibernate(){
    if (this.feedings === 0 && this.scratches === 0){
      this.hibernate();
    }
  }

  hibernate() {
      this.foodLevel = 10;
      this.moodLevel = 0;
      setTimeout(() => {
        setHunger();
        setMood();
      }, 20000)
  }
}