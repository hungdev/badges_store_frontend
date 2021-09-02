const uniqBy = (list, key) => list.filter((a, i, arr) => arr.findIndex((s) => a[key] === s[key]) === i)

export { uniqBy }