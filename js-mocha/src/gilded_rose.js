class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  // constructor(items=[]){
  //   this.items = items;
  // }
  constructor(items) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Aged Brie' && this.items[i].quality <= 50) {
        this.items[i].quality++;
        this.items[i].sellIn--;
      } else if (this.items[i].name == 'Sulfuras') {
        this.items[i].quality;
        this.items[i].sellIn;
      } else if (this.items[i].sellIn >= 0) {
        if (0 <= this.items[i].quality <= 50) {
          this.items[i].quality--;
          this.items[i].sellIn--
        } else {
          this.items[i].quality = 0;
        }
      } else if (this.items[i].sellIn < 0 && this.items[i].quality >= 2) {
        this.items[i].quality-=2;
      } 
    }
  

    
    // this.items[0].sellIn = 9;
    // this.items[0].quality = 19;
  }
}


module.exports = {
  Item,
  Shop
}