const Telegram = require("./bots/telegram")
const { intro } = require("./awesome/message")
const Stats = require("./bots/stats")
const { localeDate } = require("./shared/utility")

async function START() {
    try {
        intro()
        await update_steam_status()

    } catch (error) {
        console.log(error)
    }
}

async function update_steam_status() {
    setInterval(async () => {
        const stats = await Stats.stats_api()
        let date = new Date()
        const message =
            "━━ Services ━━━━━━━━━━━━━━━" + "\n" +
            "Online: " + stats["online"] + "\n" +
            "In-Game: " + stats["ingame"] + "\n" +
            "Store: " + stats["store"] + "\n" +
            "Community: " + stats["community"] + "\n" +
            "Web API: " + stats["webapi"] + "\n" +
            "Connection Managers: " + stats["cms"] + "\n" +
            "" + "" + "\n" +
            "123456789012345678901234567890" + "\n" +
            "CSGO Coordinator: " + stats["csgo"] + "\n" +
            "CSGO SessionsLogon: " + stats["csgo_sessions"] + "\n" +
            "CSGO Inventories: " + stats["csgo_community"] + "\n" +
            "CSGO Matchmaking: " + stats["csgo_mm_scheduler"] + "\n" +
            "Dota2 Coordinator: " + stats["dota2"] + "\n" +
            "TF2 Coordinator: " + stats["tf2"] + "\n" +
            "" + "" + "\n" +
            "━━ Update ━━━━━━━━━━━━━━━━━" + "" + "\n" +
            date.toUTCString() + "" + "\n"

        await Telegram.update_message(message, 4)
    }, 300000)
}

START()