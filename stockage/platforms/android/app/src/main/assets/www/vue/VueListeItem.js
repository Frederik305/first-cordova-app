class VueListeItem{
    constructor(){
        this.html = document.getElementById("html-vue-liste-item").innerHTML
        this.listeItemDonnee = null;
    }

    initialiserListeItem(listeItemDonnee){
        this.listeItemDonnee = listeItemDonnee;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        let listeItem = document.getElementById("liste-item");
        const listeItemItemHTML = listeItem.innerHTML;
        let listeItemHTMLRemplacement = "";

        for(var numeroItem in this.listeItemDonnee){
            let listeItemItemHTMLRemplacement = listeItemItemHTML;
            listeItemItemHTMLRemplacement = listeItemItemHTMLRemplacement.replace("{Item.id}", this.listeItemDonnee[numeroItem].id);
            listeItemItemHTMLRemplacement = listeItemItemHTMLRemplacement.replace("{Item.nom}", this.listeItemDonnee[numeroItem].nom);
            listeItemItemHTMLRemplacement = listeItemItemHTMLRemplacement.replace("{item.id}", this.listeItemDonnee[numeroItem].id);
            listeItemHTMLRemplacement += listeItemItemHTMLRemplacement
        }
        listeItem.innerHTML = listeItemHTMLRemplacement;
    }
}