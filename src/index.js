import React,{Component} from 'react';
import StyleSheet from 'react-inline';
import PropTypes from 'prop-types';
import styles from './style/index.css';

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
                className={`${styles.View} ${this.props.className}`}
                style = {this.props.style}
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
                className={`${styles.Text} ${this.props.className}`}
                style = {this.props.style}
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
              className={`${styles.ScrollView} ${this.props.className}`}
              style = {this.props.style}
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
