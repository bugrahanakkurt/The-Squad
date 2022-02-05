let data = [
    {
        name: 'bibu',
        age: '24'
        

    },
    {
        name: 'bibu',
        age: '24'
        

    },
    {
        name: 'bibu',
        age: '24'
        

    },
    {
        name: 'bibu',
        age: '24'
        

    },
    {
        name: 'bibu',
        age: '24'
        

    },
    {
        name: 'bibu',
        age: '24'
        

    }
];
const info  =document.querySelector('#info');

let details = data.map(function(item){
    return (
        '<div>' + item.name + ' ' + 'is ' +  item.age + ' ' + 'years old' +'</div>'
    )
})

info.innerHTML = details.join('\n');