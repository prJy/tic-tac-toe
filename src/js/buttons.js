const buttons = {
    data:[                       
        {
            id: "btnStartGame",
            attributes: { 
                disabled: "disabled", 
                class: "btn" 
            }, 
            properties: { 
                innerText: "Start Game" 
            },
            callback: function() {
                game.start();
            }
        },               
    ],  
    enableButton: function(index){
        builder.getContainer(buttons.data[index].id).disabled = false;
    }  
}