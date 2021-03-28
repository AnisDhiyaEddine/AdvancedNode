export const chunkify = (array, chunks, balanced) => {
    
    if (chunks < 2)
        return [array];

    var len = array.length,
            out = [],
            i = 0,
            size;

    if (len % chunks === 0) {
        size = Math.floor(len / chunks);
        while (i < len) {
            out.push(array.slice(i, i += size));
        }
    }

    else if (balanced) {
        while (i < len) {
            size = Math.ceil((len - i) / chunks--);
            out.push(array.slice(i, i += size));
        }
    }

    else {

        chunks--;
        size = Math.floor(len / chunks);
        if (len % size === 0)
            size--;
        while (i < size * chunks) {
            out.push(array.slice(i, i += size));
        }
        out.push(array.slice(size * chunks));

    }

    return out;
}
