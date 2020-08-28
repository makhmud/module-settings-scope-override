const SUCCESS_MESSAGE = "DONE!"
const WARNING_MESSAGE = "Override skipped!"
const SCOPE_ATTR_NAME = "scope";
const CLIENT_SCOPE = "client";
const WORLD_SCOPE = "world";

const SETTINGS_TO_OVERRIDE = [
    {
        TITLE: "Better Rolls 5E",
        MODULE: "betterrolls5e",
        SETTING: "betterrolls5e.diceEnabled",
        SCOPE: CLIENT_SCOPE
    },
    {
        TITLE: "Token Bar",
        MODULE: "TokenBar",
        SETTING: "TokenBar.roller",
        SCOPE: CLIENT_SCOPE
    },
    {
        TITLE: "Dice tray",
        MODULE: "dice-calculator",
        SETTING: "dice-calculator.enableDiceTray",
        SCOPE: CLIENT_SCOPE
    }
];

Hooks.on('setup', () => {
    SETTINGS_TO_OVERRIDE.forEach((value) => {
        if (game.modules.get(value.MODULE) !== undefined 
            && game.modules.get(value.MODULE).active === true
            && game.settings.settings.get(value.SETTING) !== undefined
        ) {
            let setting = game.settings.settings.get(value.SETTING);
            setting[SCOPE_ATTR_NAME] = value.SCOPE;
            game.settings.settings.set(value.SETTING, setting);
            console.log(SUCCESS_MESSAGE, value);
        } else {
            console.warn(
                WARNING_MESSAGE,
                value.TITLE, 
                game.modules.get(value.MODULE) !== undefined, 
                game.modules.get(value.MODULE).active === true, 
                game.settings.settings.get(value.SETTING) !== undefined
            );
        }
    })
});
