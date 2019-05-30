const builder = {
    buildContainer: function(id) {
        let div = this.getContainer(id);
        if (div != null) return div;
        div = document.createElement("div");
        div.id = id;
        return div;
    },
    buildButton: function(button) {
        let btn = this.getContainer(button.id); 
        if (btn == null) {
            btn = document.createElement("button"); 
            btn.setAttribute("id", button.id);
        }
        for (let attribute in button.attributes) {
            if (button.attributes.hasOwnProperty(attribute)) {                                      
                btn.setAttribute(attribute, button.attributes[attribute]);
            }
        }
        for (let property in button.properties) {                    
            btn[property] = button.properties[property];                        
        }        
        btn.onclick = button.callback;       
        return btn;
    },
    getContainer: function(documentID) {        
        return document.getElementById(documentID);
    },
}
