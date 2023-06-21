function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
    if (items.includes(item)) {
        let itemIndex = items.indexOf(item);
        items.splice(itemIndex, 1)
        return item;
    } else {
        return undefined;
    }
}

export {choice, remove};