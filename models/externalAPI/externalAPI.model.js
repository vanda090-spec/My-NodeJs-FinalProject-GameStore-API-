import {default as axios } from 'axios';

export const liveAPI=axios.create({
    baseURL:"https://www.mmobomb.com/api1/games",
    timeout:1000
})

export const platformAPI=axios.create({
    baseURL:"https://www.mmobomb.com/api1/games?platform=windows",
    timeout:5000,
})

export const categoryAPI=axios.create({
    baseURL:"https://www.mmobomb.com/api1/games?category=shooter",
    timeout:5000,
})

export const releaseAPI=axios.create({
    baseURL:"https://www.mmobomb.com/api1/games?sort-by=alphabetical",
    timeout:5000,
})

export const byPlatformCategoryAPI=axios.create({
    baseURL:"https://www.mmobomb.com/api1/games?platform=browser&category=mmorpg&sort-by=release-date",
    timeout:5000,
})

export const filterAPI=axios.create({
    baseURL:"https://www.mmobomb.com/api1/filter?tag=3d.mmorpg.fantasy.pvp&platform=windows",
    timeout:5000,
})

export const detailsAPI=axios.create({
    baseURL:"https://www.mmobomb.com/api1/game?id=452",
    timeout:5000,
})

export const giveawayAPI=axios.create({
    baseURL:"https://www.mmobomb.com/api1/giveaways",
    timeout:5000,
})

export const latestAPI=axios.create({
    baseURL:"https://www.mmobomb.com/api1/latestnews",
    timeout:5000,
})