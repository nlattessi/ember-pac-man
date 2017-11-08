import Level from './level';

export default Level.extend({
    layout: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 2, 1, 2, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 2, 1, 2],
        [2, 2, 2, 1, 1, 1, 2, 2, 2],
        [2, 1, 2, 2 ,2, 2, 2, 1, 2],
        [2, 1, 1, 2, 1, 2, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    squareSize: 60,
    startingPac: {
        x: 0,
        y: 3
    },
    startingGhosts: [{
        x: 0,
        y: 0
    }, {
        x: 5,
        y:0
    }],
});
