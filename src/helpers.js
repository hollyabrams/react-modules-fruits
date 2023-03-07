// Returns a randomly selected item from an array of items.
function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// Removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
function remove(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        return items.splice(index, 1)[0];
    }
    return undefined;
}

export { choice, remove }