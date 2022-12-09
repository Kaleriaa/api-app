function ItemIdFromUrl(url) {
    return +(url.substr(url.lastIndexOf('/')+1))
}

export default ItemIdFromUrl