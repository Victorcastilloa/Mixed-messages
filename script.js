// Mixed messages project for Javascript course on Codecademy by Victor Castillo
const countries= ['Spain', 'Portugal', 'Netherlands', 'Argentina', 'Brazil', 'England', 'Morocco', 'Croatia','Japan', 'France', 'Senegal'];
    let randomGenerator= Math.floor(Math.random() * 11)

const generateMessage= (param) => {
    switch(param){
        case 0:
            return `${countries[0]} will win the World Cup`;
            break;
        case 1:
            return `${countries[1]} will win the World Cup`;
            break;
        case 2:
            return `${countries[2]} will win the World Cup`;
            break;
        case 3:
            return `${countries[3]} will win the World Cup`;
            break;
        case 4:
            return `${countries[4]} will win the World Cup`;
            break;
        case 5:
            return `${countries[5]} will win the World Cup`;
            break;
        case 6:
            return `${countries[6]} will win the World Cup`;
            break;
        case 7:
            return `${countries[7]} will win the World Cup`;
            break;
        case 8:
            return `${countries[8]} will win the World Cup`;
            break;
        case 9:
            return `${countries[9]} will win the World Cup`;
            break;
        case 10:
            return `${countries[10]} will win the World Cup`;
            break;
            default: `Error`
    }
}

console.log(generateMessage(randomGenerator));
