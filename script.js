var app = new Vue({
  el: '#app',

  data: {
    colorVariables: {
      '--bgColor': 'OldLace',
      '--color': 'DarkSlateGray',
      '--primary': 'Navy',
      '--textOnPrimary': 'white',
      '--secondary': 'OrangeRed',
      '--textOnSecondary': 'white'
    },
    defaultTheme: {
      '--bgColor': 'OldLace',
      '--color': 'DarkSlateGray',
      '--primary': 'Navy',
      '--textOnPrimary': 'white',
      '--secondary': 'OrangeRed',
      '--textOnSecondary': 'white'
    },
    bubblegumTheme: {
      '--bgColor': 'DarkBlue',
      '--color': 'white',
      '--primary': 'violet',
      '--textOnPrimary': 'white',
      '--secondary': 'pink',
      '--textOnSecondary': 'red'
    },
    midnightTheme: {
      '--bgColor': 'Black',
      '--color': 'white',
      '--primary': 'Pink',
      '--textOnPrimary': 'Red',
      '--secondary': 'Yellow',
      '--textOnSecondary': 'Black'
    },
    froggerTheme: {
      '--bgColor': 'OliveDrab',
      '--color': 'white',
      '--primary': 'Black',
      '--textOnPrimary': 'White',
      '--secondary': 'DarkOrange',
      '--textOnSecondary': 'White'
    },
    AlleyCatTheme: {
      '--bgColor': '#FC54FC',
      '--color': 'Black',
      '--primary': '#54FCFC',
      '--textOnPrimary': 'Black',
      '--secondary': '#ADABFF',
      '--textOnSecondary': 'White'
    }
  },

  methods: {
    setTheme: function(theme) {
      this.colorVariables['--bgColor'] = theme['--bgColor'];
      this.colorVariables['--color'] = theme['--color'];
      this.colorVariables['--primary'] = theme['--primary'];
      this.colorVariables['--textOnPrimary'] = theme['--textOnPrimary'];
      this.colorVariables['--secondary'] = theme['--secondary'];
      this.colorVariables['--textOnSecondary'] = theme['--textOnSecondary'];
    }
  }

});
