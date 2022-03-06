const obj1 = [
    { key: 'aaa', quantity: 1 },
    { key: 'bbb', quantity: 2 },
    { key: 'ccc', quantity: 4 },
    { key: 'ddd', quantity: 3 },
    { key: 'eeee', quantity: 1 },
    { key: 'ffff', quantity: 2 },
    { key: 'gggg', quantity: 1 }
]
const obj2 = [
    { key: 'aaa', quantity: 1 },
    { key: 'aaa', quantity: 2 },
    { key: 'aaa', quantity: 4 },
    { key: 'bbb', quantity: 4 },
    { key: 'bbb', quantity: 4 },
    { key: 'gggg', quantity: 4 }
]
const fObj1 = obj1.map(pdk => {
    const nk = pdk.key;
    let count = 0;
    const fObj2 = obj2.filter(pd => pd.key === nk)
    // console.log(fObj2)
    return fObj2;
})
console.log(fObj1);
