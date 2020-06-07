
// SET VALUES
export const SetValues = (key, data) => {
    sessionStorage.removeItem(key);
    const values = JSON.stringify(data);
    sessionStorage.setItem(key, values);
}

// GET VALUES
export const GetValues = key => JSON.parse(sessionStorage.getItem(key));

// REMOVE VALUES
export const RemoveValues = key => sessionStorage.removeItem(key);
