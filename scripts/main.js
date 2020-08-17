
let debug = false;
let log = (...args) => console.log("Module Settings Override Scope | ", ...args);

Hooks.on('init', ()=> {
    registerSettings();
});

function registerSettings(){
    // override betterrolls5e scope
    log('Better Rolls 5E', game.modules.get("betterrolls5e") !== undefined, game.modules.get("betterrolls5e").active === true)
    if(game.modules.get("betterrolls5e") !== undefined && game.modules.get("betterrolls5e").active === true)
    {
        let setting = game.settings.settings.get("betterrolls5e.diceEnabled");
        setting["scope"] = "client";
        game.settings.settings.set("betterrolls5e.diceEnabled", setting);
        log("betterrolls5e.diceEnabled: done!")
    }
    // override tokenbar scope
    log('Token Bar', game.modules.get("TokenBar") !== undefined, game.modules.get("TokenBar").active === true);
    if(game.modules.get("TokenBar") !== undefined && game.modules.get("TokenBar").active === true)
    {
        let setting = game.settings.settings.get("TokenBar.roller");
        setting["scope"] = "client";
        game.settings.settings.set("TokenBar.roller", setting);
        log("TokenBar.roller: done!")
    }
    // override dice tray scope
    log('Dice tray', game.modules.get("dice-calculator") !== undefined, game.modules.get("dice-calculator").active === true)
    if(game.modules.get("dice-calculator") !== undefined && game.modules.get("dice-calculator").active === true)
    {
        let setting = game.settings.settings.get("dice-calculator.enableDiceTray");
        setting["scope"] = "client";
        game.settings.settings.set("dice-calculator.enableDiceTray", setting);
        log("dice-calculator.enableDiceTray: done!")
    }


    if(debug) {log(data,game.settings);}
}