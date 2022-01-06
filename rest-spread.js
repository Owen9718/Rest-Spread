

const filterOutOdds = (...nums) => nums.filter((num)=> num % 2 === 0)

const findMin = (...nums) => Math.min(...nums);

const objMerge = (obj1,obj2) => ({...obj1,...obj2})

const doubleArgs = (arr, ...doub) => [...arr,...doub.map((val) => val * 2)]

const removeRan = (item) => { let idx = Math.floor(Math.random() * item.length); return [...item.slice(0,idx),...item.slice(idx + 1)] }

const extend = (arr1,arr2) => [...arr1,...arr2]

const addKeyVal = (obj,key,val) => {let newObj = {...obj}; newObj[key] = val; return newObj}

const objRemove = (obj,key) => {let newObj = {...obj}; delete newObj[key]; return newObj }

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 })

const modKey = (obj, key, val) => { let newObj = { ...obj }; newObj[key] = val; return newObj }