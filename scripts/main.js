
let debug = false;
let log = (...args) => console.log("Module Settings Override Scope | ", ...args);

Hooks.on('init', ()=> {
    registerSettings();
});

function registerSettings(){
    // override betterrolls5e scope
    if(game.modules.get("betterrolls5e") !== undefined && game.modules.get("betterrolls5e").active === true)
    {
        let setting = game.settings.settings.get("betterrolls5e.diceEnabled");
        setting["scope"] = "client";
        game.settings.settings.set("betterrolls5e.diceEnabled", setting);
        log("betterrolls5e.diceEnabled: done!")
    }
    // override tokenbar scope
    if(game.modules.get("TokenBar") !== undefined && game.modules.get("TokenBar").active === true)
    {
        let setting = game.settings.settings.get("TokenBar.roller");
        setting["scope"] = "client";
        game.settings.settings.set("TokenBar.roller", setting);
        log("TokenBar.roller: done!")
    }
    if(debug) {log(data,game.settings);}
}