// This file is automatically generated. Do not modify it manually.

const manifest = JSON.parse(`
{
    "id": "com.github.jespino.recomend",
    "name": "Recommend",
    "description": "This plugin recommends you channels",
    "homepage_url": "https://github.com/jespino/mattermost-plugin-recommend",
    "support_url": "https://github.com/jespino/mattermost-plugin-recommend/issues",
    "icon_path": "assets/icon.svg",
    "version": "0.0.1",
    "min_server_version": "5.16.0",
    "server": {
        "executables": {
            "linux-amd64": "server/dist/plugin-linux-amd64",
            "darwin-amd64": "server/dist/plugin-darwin-amd64",
            "windows-amd64": "server/dist/plugin-windows-amd64.exe"
        },
        "executable": ""
    },
    "webapp": {
        "bundle_path": "webapp/dist/main.js"
    },
    "settings_schema": {
        "header": "",
        "footer": "",
        "settings": [
            {
                "key": "RecommendOnJoinTeam",
                "display_name": "Recommend at team join",
                "type": "bool",
                "help_text": "When user joins to a team, recommend bot is going to recommend interesting channels in that team to him.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "RecommendOnJoinChannel",
                "display_name": "Recommend at channel join",
                "type": "bool",
                "help_text": "When user joins to a channel, recommend bot is going to recommend other channels in the team based on the people in that channel.",
                "placeholder": "",
                "default": null
            }
        ]
    }
}
`);

export default manifest;
export const id = manifest.id;
export const version = manifest.version;
