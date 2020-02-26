const path = require("path");

module.exports = {
    stories: ["../packages/**/*.stories.js"],
    addons: ["@storybook/addon-docs"],
    webpackFinal: async config => {
        // styles
        config.module.rules.push({
            test: /\.(sass|scss)$/,
            use: ["resolve-url-loader"],
            include: path.resolve(__dirname, "../")
        });
        // fonts
        config.module.rules.push({
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: [
                {
                    loader: "file-loader",
                    query: {
                        name: "[name].[ext]"
                    }
                }
            ],
            include: path.resolve(__dirname, "../")
        });

        return config;
    }
};
