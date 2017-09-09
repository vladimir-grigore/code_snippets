import React, { Component } from 'react';
import { Navigator, NativeModules, AppRegistry } from 'react-native';
import { COLOR, ThemeProvider } from './node_modules/react-native-material-ui';

import App from './src/App';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

class material_demo extends Component {
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <App />
            </ThemeProvider>
        );
    }
}

AppRegistry.registerComponent('material_demo', () => material_demo);
