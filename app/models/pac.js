import Ember from 'ember';
import SharedStuff from '../mixins/shared-stuff';
import Movement from '../mixins/movement';

export default Ember.Object.extend(SharedStuff, Movement, {
    direction: 'down',
    intent: 'down',
    //powerMode: false,

    color: Ember.computed('powerModeTime', function(){
        let timerPercentage = this.get('powerModeTime') / this.get('maxPowerModeTime');
        let powered = {r: 60, g: 100, b: 0};
        let normal = {r: 100, g: 95, b: 0};
        let [r, g, b] = ['r', 'g', 'b'].map(function(rgbSelector){
          let color =  powered[rgbSelector] * timerPercentage +
                       normal[rgbSelector] * (1 - timerPercentage)
          return Math.round(color)
        })
        return `rgb(${r}%,${g}%,${b}%)`
      }),

    restart() {
        this.set('x', this.get('level.startingPac.x'));
        this.set('y', this.get('level.startingPac.y'));
        this.set('frameCycle', 0);
        this.set('direction', 'stopped');
    },

    draw() {
        let x = this.get('x');
        let y = this.get('y');
        let radiusDivisor = 2;
        this.drawCircle(x, y, radiusDivisor, this.get('direction'), this.get('color'));
    },

    changeDirection() {
        let intent = this.get('intent');
        if (this.pathBlockedInDirection(intent)) {
            this.set('direction', 'stopped');
        }
        else {
            this.set('direction', intent);
        }
    },
});
