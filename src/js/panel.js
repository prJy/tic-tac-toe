const panel = {
    container: null,       
    get button(){
        return this.buttons;        
    },
    init: function() {
        this.buildContainers();
        this.buildButtons();
    },    
    buildContainers: function (){
        this.buildPanel();                
    },   
    buildButtons: function(){
        buttons.data.forEach((button) => {
            let btn = builder.buildButton(button);
            this.container.insertBefore(btn, this.container.firstChild);   
        });           
    },
    buildPanel: function(){        
        this.container = builder.buildContainer(game.options.panelID);
        game.container.parentNode.insertBefore(this.container, game.container.nextSibling);
    },    
}