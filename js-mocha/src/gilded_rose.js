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
      if (this.items[i].name == 'Aged Brie') {
        this.updateAgedBrie(this.items[i]);
      } else if (this.items[i].name == 'Sulfuras') {
        this.updateSulfuras(this.items[i]);
      } else if (this.items[i].name == 'Backstage passes') {
        this.updateBackstagePasses(this.items[i]);
      } else {
        this.updateNormal(this.items[i]);
      }
    }
  }
  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality++;
      item.sellIn--;
    } else {
      item.quality = 50;
      item.sellIn--;
    }
  }
  updateSulfuras(item) {
    console.log('this.item==' + item);
    console.log('this.item.name==' + item.name);
    item.quality;
    item.sellIn;
  }
  updateBackstagePasses(item) {
    if (item.sellIn > 10) {
      item.quality++;
      item.sellIn--;
    } else if (item.sellIn > 5 && item.sellIn <= 10) {
      item.quality += 2;
      item.sellIn--;
    } else if (item.sellIn > 0 && item.sellIn <= 5) {
      item.quality += 3;
      item.sellIn--;
    } else {
      item.quality = 0;
    }
  }
  updateNormal(item) {
    if (item.sellIn >= 0) {
      if (item.quality >= 1) {
        item.quality--;
        item.sellIn--;
      } else {
        item.quality = 0;
        item.sellIn--;
      }
    } else if (item.sellIn < 0 && item.quality >= 2) {
      item.quality -= 2;
      item.sellIn--;
    } 
  }
}


module.exports = {
  Item,
  Shop
}
