const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);


config.resolver.sourceExts = config.resolver.sourceExts.filter(ext => ext !== 'ass');

config.resolver.assetExts.push('ass');

module.exports = config;
