class VueModifierItem {
    constructor(){
        this.html = document.getElementById("html-vue-modifier-item").innerHTML;
        this.item = null;
        this.actionModifierItem = null;
    }

    initialiserItem(item){
        this.item = item;
    }

    initialiserActionModifierItem(actionModifierItem){
        this.actionModifierItem = actionModifierItem;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("formulaire-modifier").addEventListener("submit", evenement => this.enregistrer(evenement));

        document.getElementById("item-nom").value = this.item.nom;
        document.getElementById("item-marque").value = this.item.marque;
        document.getElementById("item-description").innerHTML = this.item.description;

        document.getElementById("item-image").innerHTML = this.item.image;
    }

    enregistrer(evenement){
        evenement.preventDefault();

        let nom = document.getElementById("item-nom").value;
        let marque = document.getElementById("item-marque").value;
        let description = document.getElementById("item-description").value;
        let imageInput = document.getElementById("item-image");
        let currentImage = this.item.image;
        let id = this.item.id;

        if (nom && marque && description) {
            if (imageInput.files.length > 0) {
                let imageFile = imageInput.files[0];
                let reader = new FileReader();

                reader.onload = function () {
                    let imageBase64 = reader.result;
                    this.actionModifierItem(new Item(nom, marque, description, imageBase64, id));
                }.bind(this);

                reader.readAsDataURL(imageFile);
            } else {
                this.actionModifierItem(new Item(nom, marque, description, currentImage, id));
            }
        } else {
            console.log("svp remplire tous les inputs.");
        }
    }
}