class VueItem{
    constructor(){
        this.html = document.getElementById("html-vue-item").innerHTML;
        this.item = null;
    }

    initialiserItem(item){
        this.item = item;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("item-nom").innerHTML = this.item.nom;
        document.getElementById("item-marque").innerHTML = this.item.marque;
        document.getElementById("item-description").innerHTML = this.item.description;

        document.getElementById("test").src = this.item.image;
    }
}