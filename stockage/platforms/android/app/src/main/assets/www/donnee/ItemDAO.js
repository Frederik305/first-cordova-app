class ItemDAO{
    constructor(){
        this.listeItem = [];
    }

    lister(){
        if(localStorage['item']){
            this.listeItem = JSON.parse(localStorage['item']);
        }

        for(let position in this.listeItem){
            let item = new Item(this.listeItem[position].nom,
                                    this.listeItem[position].marque,
                                    this.listeItem[position].description,
                                    this.listeItem[position].image,
                                    this.listeItem[position].id);
            this.listeItem[item.id] = item;
        }
        return this.listeItem;
    }

    ajouter(item){
        if(this.listeItem.length > 0)
            item.id = this.listeItem[this.listeItem.length - 1].id + 1;
        else
            item.id = 0;

        this.listeItem[item.id] = item;

        localStorage['item'] = JSON.stringify(this.listeItem);
    }

    modifier(item){
    const index = this.listeItem.findIndex(existingItem => existingItem.id === item.id);
    
    if(index !== -1) {
        this.listeItem[index] = item;
        
        localStorage['item'] = JSON.stringify(this.listeItem);
    } else {
        console.error("Item: " + item.id + " N'a pas ete trouver.");
    }
    }
}