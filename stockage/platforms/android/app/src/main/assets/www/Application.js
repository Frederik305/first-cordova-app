class Application{
    constructor(window, itemDAO, vueListeItem, vueAjouterItem, vueItem, vueModifierItem){
        this.window = window;
        this.itemDAO = itemDAO;

        this.vueListeItem = vueListeItem;

        this.vueAjouterItem = vueAjouterItem;
        this.vueAjouterItem.initialiserActionAjouterItem(item => this.actionAjouterItem(item));

        this.vueItem = vueItem;

        this.vueModifierItem = vueModifierItem;
        this.vueModifierItem.initialiserActionModifierItem(item => this.actionModifierItem(item));

        this.window.addEventListener("hashchange", () => this.naviger());

        document.addEventListener('deviceready', () => this.initialiserNavigation(), false);
    }

    initialiserNavigation() {
        console.log("Application-->initialiserNavigation");

        this.window.addEventListener("hashchange", () => this.naviger());

        setTimeout(() => this.naviger(), 1500);
    }

    naviger(){
        let hash = window.location.hash;

        if(!hash){
            this.vueListeItem.initialiserListeItem(this.itemDAO.lister());
            this.vueListeItem.afficher();
        }else if(hash.match(/^#ajouter-item/)){
            this.vueAjouterItem.afficher();
        }else if(hash.match(/^#modifier-item\/([0-9]+)/)){
            let navigation = hash.match(/^#modifier-item\/([0-9]+)/)
            let idItem = navigation[1];

            this.vueModifierItem.initialiserItem(this.itemDAO.lister()[idItem]);
            this.vueModifierItem.afficher();
        }else{
            let navigation = hash.match(/^#item\/([0-9]+)/);
            let idItem = navigation[1];

            this.vueItem.initialiserItem(this.itemDAO.lister()[idItem]);
            this.vueItem.afficher();
        }
    }

    actionAjouterItem(item){
        this.itemDAO.ajouter(item);
        this.window.location.hash = "#";
    }

    actionModifierItem(item){
        this.itemDAO.modifier(item);
        this.window.location.hash = "#";
    }
}

new Application(window, new ItemDAO(), new VueListeItem(), new VueAjouterItem(), new VueItem(), new VueModifierItem());