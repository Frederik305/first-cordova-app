class VueAjouterItem{
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-item").innerHTML;
        this.vueAjouterItem = null;
    }

    initialiserActionAjouterItem(actionAjouterItem){
        this.actionAjouterItem = actionAjouterItem;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-ajouter").addEventListener("submit", evenement => this.enregistrer(evenement));
    }

    enregistrer(event) {
        event.preventDefault();

        let nom = document.getElementById("item-nom").value;
        let marque = document.getElementById("item-marque").value;
        let description = document.getElementById("item-description").value;
        let imageInput = document.getElementById("item-image");

        if (nom && marque && description) {
            if (imageInput.files.length > 0) {
                let imageFile = imageInput.files[0];
                let reader = new FileReader();

                reader.onload = function () {
                    let imageBase64 = reader.result;
                    this.actionAjouterItem(new Item(nom, marque, description, imageBase64, null));
                }.bind(this);

                reader.readAsDataURL(imageFile);
            } else {
                this.actionAjouterItem(new Item(nom, marque, description, null, null));
            }
        } else {
            console.log("svp remplire tous les inputs.");
        }
    }
}