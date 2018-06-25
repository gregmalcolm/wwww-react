import imageManifest from './weapons-manifest.json'

class WeaponModel {
    constructor(attr={}) {
        this._id = attr.id;
        this._name = attr.name;
        this._category = attr.category;
        this._subcategory = attr.subcategory;
        this._cost = attr.cost;
        this._damage = attr.damage;
        this._range = attr.range;
        this._weight = attr.weight;
        this._imageUrl = attr.imageUrl;
        this._enchanted = attr.enchanted || false;
    }

    attributes() {
        return {
            id: this._id,
            name: this._name,
            category: this._category,
            subcategory: this._subcategory,
            cost: this._cost,
            damage: this._damage,
            range: this._range,
            weight: this._weight,
            imageUrl: this._imageUrl,
            enchanted: this._enchanted
        }
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this.name = name;
    }

    get category() {
        return this._category;
    }
    set category(category) {
        this._category = category;
    }

    get subcategory() {
        return this._subcategory;
    }
    set subcategory(subcategory) {
        this._subcategory = subcategory;
    }

    get cost() {
        return this._enchanted ? this._cost * 10 : this._cost;
    }
    set cost(cost) {
        this._cost = cost;
    }

    get damage() {
        return this._enchanted ? `${this._damage} + 1` : this._damage;
    }
    set damage(damage) {
        this._damage = damage;
    }

    get range() {
        return this._enchanted && this._range ? this._range * 2 : this._range;
    }
    set range(range) {
        this._range = range;
    }

    get weight() {
        return this._enchanted && this._weight
            ? (this._weight * 1.2).toFixed(1)
            : this._weight;
    }
    set weight(weight) {
        this._weight = weight;
    }

    get imageUrl() {
        if (this._imageUrl) {
            return `/images/weapons/${this._imageUrl}`;
        } else {
            return this._placeholderImageUrl();
        }
    }
    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
    }

    get enchanted() {
        return this._enchanted;
    }
    set enchanted(enchanted) {
        this._enchanted = enchanted;
    }

    rangeText() {
        return this._range ? `${this._range} lb` : "-"
    }

    costInCoins() {
        if (this.cost >= 100) {
            return this.cost/100;
        } else if (this.cost >= 10){
            return this.cost/10;
        } else {
            return this.cost;
        }
    }

    costCurrency() {
        if (this.cost >= 100) {
            return "gp";
        } else if (this.cost >= 10){
            return "sp";
        } else {
            return "cp";
        }
    }

    _placeholderImageUrl() {
        const manifest = imageManifest;
        const imageNum = this._id % manifest.length;
        return `/images/weapons/${manifest[imageNum]}`
    }

}

export default WeaponModel;