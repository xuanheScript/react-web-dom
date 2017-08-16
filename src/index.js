import React,{PropTypes,Component} from 'react';
import StyleSheet from 'react-inline';

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;


export class View extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
    };
    static defaultProps = {
        className : '',
        style : undefined,
    };
    render() {
        return (
            <div
                {...this.props}
                className={`${this.props.className}`}
                style = {Object.assign({},styles.View,this.props.style)}
            >
                {this.props.children}
            </div>
        )
    }
}


export class Text extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
    };
    static defaultProps = {
        className : '',
        style : undefined,
    };
    render() {
        return (
            <span
                {...this.props}
                className={`${this.props.className}`}
                style = {Object.assign({},styles.Text,this.props.style)}
            >
                {this.props.children}
            </span>
        )
    }
}


export class ScrollView extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
    };
    static defaultProps = {
        className : '',
        style : undefined,
    };
    render() {
        return (
            <div
              className={`${this.props.className}`}
              style = {Object.assign({},styles.ScrollView,this.props.style)}
            >
              {this.props.children}
            </div>
        )
    }
}


export class ViewMax extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
    };
    static defaultProps = {
        className : '',
        style : undefined,
    };
    render() {
        return (
            <View
                className={`${this.props.className}`}
                style = {Object.assign({},{height: windowHeight},this.props.style)}
            >
                {this.props.children}
            </View>
        )
    }
}



const styles = StyleSheet.create({
    View : {
        display: 'flex',
        alignItems: 'initial',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    Text : {
        margin : 0
    },
    ScrollView : {
        display : 'flex',
        alignItems: 'initial',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        overflow: 'scroll',
        '-webkit-overflow-scrolling' : 'touch'
    }
})
